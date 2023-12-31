import React, { useState } from 'react'
import { FormInput } from '@/ui/form/input'
import { FormSelect } from '@/ui/form/select'
import { FormText } from '@/ui/form/text'
// import { FormSubmit } from '../form/submit'
import { CopyInput } from '@/ui/copy'
import { queryToString } from '~/utils/query'
import { useRouter } from '~/hooks/useRouter'
import { Congrats } from '@/congrats'
import { Welcome } from '@/welcome/welcome'
import { StContainer, StNameWrap, StOptionsWrap, StSwitcherWrap } from './styles'
import { cardViewNames } from '@/card-view'
import { Switcher } from '@/ui/switcher'
import { useLocalization } from '~/hooks/useLocalization'
import { Thumbnails } from '@/card-view/thumbnail'

const MAX = 2024 - 18 - 7 - 28 // Max url length - host - card - name length

export function Constructor() {
  const { host } = useRouter()
  const [result, setResult] = useState('')
  const [rest, setRest] = useState(MAX)
  const [preview, setPreview] = useState(true)
  const { loc } = useLocalization()
  const refSelect = React.createRef<HTMLSelectElement>()

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.target as HTMLFormElement)
    const data: Record<string, string> = { text: '', name: '' }
    for (const [key, value] of form.entries()) {
      data[key] = String(value)
    }

    setResult(queryToString(data))
  }

  function changeHandler<T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(obj: React.ChangeEvent<T> | T) {
    const isEvent = Object.hasOwn(obj, 'nativeEvent')
    if (isEvent) (obj as React.ChangeEvent<T>).preventDefault()
    const el = (isEvent ? (obj as React.ChangeEvent<T>).target : obj) as T

    if (el instanceof HTMLTextAreaElement) {
      if (el.value.length > MAX) el.value = el.value.slice(0, MAX)
      el.rows = Math.max(el.value.split('\n').length, 2)
      setRest(MAX - el.value.length)
    }

    setResult(prev => queryToString({ [el.id]: el.value }, prev))
  }

  return (
    <>
      <Welcome />
      <StContainer $preview={preview}>
        <section>
          <form onSubmit={submitHandler}>
            <h2 style={{ alignSelf: 'center' }}>{loc('constructor_header')}</h2>
            <StNameWrap>
              <FormInput type="text" id="name" placeholder={loc('recipient_placeholder')} onChange={changeHandler} />
              <StOptionsWrap>
                <FormSelect id="card" ref={refSelect} options={cardViewNames} onChange={changeHandler} placeholder={loc('card_placeholder')} />
                <StSwitcherWrap>
                  <span>{loc('preview')}:</span>
                  <Switcher toggled={preview} onClick={() => setPreview(prev => !prev)} />
                </StSwitcherWrap>
              </StOptionsWrap>
            </StNameWrap>
            <FormText id="text" placeholder={loc('textarea_placeholder')} rest={rest} onChange={changeHandler} />
            {/* <FormSubmit>Perform</FormSubmit> */}
          </form>
          {result && <CopyInput text={`${host}?${result}`} placeholder={loc('copy_placeholder')} />}
          <Thumbnails refSelect={refSelect} onChange={changeHandler} />
        </section>
        {preview && <Congrats query={result} preview={true} />}
      </StContainer>
    </>
  )
}
