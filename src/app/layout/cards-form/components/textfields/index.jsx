import { useRef } from 'react'
import clsx from 'clsx'
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  AlignJustifyIcon,
  FontFamilyIcon,
  FontColorIcon,
  FontSizeIcon
} from '@/src/app/components/icons/text-options'

const TextFieldsSection = ({ text, setState, options, t, className }) => {
  const contentRef = useRef(null)
  const { bold, italic, underline, align, font, color, size } = options

  const optionButtons = [
    {
      id: 'bold',
      icon: <BoldIcon />,
      onclick: () => {
        setState((prev) => ({ ...prev, options: { ...prev.options, bold: !prev.options.bold } }))
      }
    },
    {
      id: 'italic',
      icon: <ItalicIcon />,
      onclick: () =>
        setState((prev) => ({
          ...prev,
          options: { ...prev.options, italic: !prev.options.italic }
        }))
    },
    {
      id: 'underline',
      icon: <UnderlineIcon />,
      onclick: () =>
        setState((prev) => ({
          ...prev,
          options: { ...prev.options, underline: !prev.options.underline }
        }))
    },
    {
      id: 'left',
      icon: <AlignLeftIcon />,
      onclick: () =>
        setState((prev) => ({
          ...prev,
          options: { ...prev.options, align: 'left' }
        }))
    },
    {
      id: 'center',
      icon: <AlignCenterIcon />,
      onclick: () =>
        setState((prev) => ({
          ...prev,
          options: { ...prev.options, align: 'center' }
        }))
    },
    {
      id: 'right',
      icon: <AlignRightIcon />,
      onclick: () =>
        setState((prev) => ({
          ...prev,
          options: { ...prev.options, align: 'right' }
        }))
    },
    {
      id: 'justify',
      icon: <AlignJustifyIcon />,
      onclick: () =>
        setState((prev) => ({
          ...prev,
          options: { ...prev.options, align: 'justify' }
        }))
    },
    { id: 'font', icon: <FontFamilyIcon />, onclick: () => {} },
    { id: 'color', icon: <FontColorIcon />, onclick: () => {} },
    { id: 'size', icon: <FontSizeIcon />, onclick: () => {} }
  ]

  return (
    <section
      className={`text-white font-semibold flex flex-col gap-2 w-full md:w-5/12 ${className || ''}`}
    >
      <div className="flex flex-wrap gap-2">
        {optionButtons.map(({ id, icon, onclick }) => (
          <button
            key={id}
            type="button"
            className={clsx(
              'p-1.5 text-gray-300 rounded cursor-pointer hover:text-white bg-gray-600',
              options[id] && 'border-white border',
              options['align'] === id && 'border-white border',
              (id === 'font' || id === 'color' || id === 'size') && 'border-0'
            )}
            onClick={onclick}
          >
            {icon}
          </button>
        ))}
      </div>
      <textarea
        ref={contentRef}
        name="wish"
        value={text}
        onChange={(e) => setState((prev) => ({ ...prev, text: e.target.value }))}
        wrap="hard"
        required
        placeholder={t['Text on Card'] || 'Text on Card'}
        className={clsx(
          'w-full min-h-72 md:min-h-0 text-sm md:text-base flex-grow border-b-2 border-slate-200 outline-0 placeholder:text-gray-400 px-3 py-2 placeholder:capitalize !bg-slate-900/70',
          bold && 'font-bold',
          italic && 'italic',
          underline && 'underline',
          align === 'left' && 'text-left',
          align === 'center' && 'text-center',
          align === 'right' && 'text-right',
          align === 'justify' && 'text-justify'
        )}
      />
    </section>
  )
}

export default TextFieldsSection
