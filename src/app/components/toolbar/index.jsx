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

const Toolbar = ({ editor, content }) => {
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
    },
    // { id: 'font', icon: <FontFamilyIcon />, onclick: () => {} },
    {
      id: 'color',
      icon: <FontColorIcon />,
      onclick: (e) => editor.chain().focus().setColor(e.target.value).run()
    }
    // { id: 'size', icon: <FontSizeIcon />, onclick: () => {} }
  ]

  if (!editor) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2">
      {optionButtons.map(({ id, icon, onclick }) => {
        if (id === 'color') {
          return (
            <label
              key={id}
              htmlFor={id}
              for={id}
              className="p-1.5 text-gray-300 relative rounded cursor-pointer hover:text-white bg-gray-600"
            >
              {icon}
              <input
                id={id}
                type="color"
                onInput={(e) => onclick(e)}
                value={editor.getAttributes('textStyle').color}
                data-testid="setColor"
                className="absolute top-0 left-0 w-8 h-8 invisible"
              />
            </label>
          )
        }

        return (
          <button
            key={id}
            type="button"
            className={clsx(
              'p-1.5 text-gray-300 rounded cursor-pointer hover:text-white bg-gray-600',
              editor.isActive(id) && 'border-white border',
              (id === 'font' || id === 'color' || id === 'size') && 'border-0'
            )}
            onClick={onclick}
          >
            {icon}
          </button>
        )
      })}
    </div>
  )
}

export default Toolbar
