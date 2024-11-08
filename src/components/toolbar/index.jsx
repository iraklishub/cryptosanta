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
} from '../icons/text-options'
import { fontFamilyOptions, fontSizeOptions } from '@/src/constants'

const Toolbar = ({ editor }) => {
  if (!editor) {
    return null
  }

  const optionButtons = [
    {
      id: 'bold',
      icon: <BoldIcon />,
      onclick: () => editor.chain().focus().toggleBold().run()
    },
    {
      id: 'italic',
      icon: <ItalicIcon />,
      onclick: () => editor.chain().focus().toggleItalic().run()
    },
    {
      id: 'underline',
      icon: <UnderlineIcon />,
      onclick: () => editor.chain().focus().toggleUnderline().run()
    },
    {
      id: 'left',
      icon: <AlignLeftIcon />,
      onclick: () => editor.chain().focus().setTextAlign('left').run()
    },
    {
      id: 'center',
      icon: <AlignCenterIcon />,
      onclick: () => editor.chain().focus().setTextAlign('center').run()
    },
    {
      id: 'right',
      icon: <AlignRightIcon />,
      onclick: () => editor.chain().focus().setTextAlign('right').run()
    },
    {
      id: 'justify',
      icon: <AlignJustifyIcon />,
      onclick: () => editor.chain().focus().setTextAlign('justify').run()
    }
  ]

  const optionSelects = [
    {
      id: 'size',
      icon: <FontSizeIcon />,
      defaultValue: '16px',
      onclick: (e) =>
        editor.chain().focus().setMark('textStyle', { fontSize: e.target.value }).run(),
      options: fontSizeOptions
    },
    {
      id: 'font',
      icon: <FontFamilyIcon />,
      defaultValue: 'Arial, sans-serif',
      onclick: (e) => editor.chain().focus().setFontFamily(e.target.value).run(),
      options: fontFamilyOptions
    }
  ]

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {optionButtons.map(({ id, icon, onclick }) => (
        <button
          key={id}
          type="button"
          className={clsx(
            'p-1.5 text-gray-300 rounded cursor-pointer hover:text-white bg-gray-600',
            editor.isActive(id) && 'border-white border',
            editor.isActive({ textAlign: id }) && 'border-white border'
          )}
          onClick={onclick}
        >
          {icon}
        </button>
      ))}

      {optionSelects.map(({ id, icon, onclick, options, defaultValue }) => (
        <label
          key={id}
          htmlFor={id}
          className="p-1.5 text-gray-300 relative rounded cursor-pointer hover:text-white bg-gray-600"
        >
          {icon}
          <select
            id={id}
            className="absolute left-0 top-0 w-8 h-8 cursor-pointer opacity-0"
            onChange={(e) => onclick(e)}
            defaultValue={defaultValue}
          >
            {options.map(({ value, label }) => (
              <option key={value} value={value} style={{ fontFamily: value }}>
                {label}
              </option>
            ))}
          </select>
        </label>
      ))}

      <label
        htmlFor="color"
        className="p-1.5 text-gray-300 relative rounded cursor-pointer hover:text-white bg-gray-600"
      >
        <FontColorIcon />
        <input
          id="color"
          type="color"
          onInput={(e) => editor.chain().focus().setColor(e.target.value).run()}
          value={editor.getAttributes('textStyle').color}
          data-testid="setColor"
          className="absolute top-0 left-0 w-8 h-8 cursor-pointer opacity-0"
        />
      </label>
    </div>
  )
}

export default Toolbar
