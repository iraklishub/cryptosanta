'use client'

import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import HardBreak from '@tiptap/extension-hard-break'
import FontFamily from '@tiptap/extension-font-family'
import Placeholder from '@tiptap/extension-placeholder'
import { FontSize } from './fontSizeExtension'
import { useEditor, EditorContent } from '@tiptap/react'
import { ToolBar } from '..'

const Tiptap = ({ onChange, placeholder, text }) => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      Italic,
      Underline,
      TextStyle,
      Color,
      HardBreak,
      FontFamily,
      FontSize,
      Placeholder.configure({
        placeholder
      }),
      TextAlign.configure({
        types: ['paragraph']
      })
    ],
    editorProps: {
      attributes: {
        class: 'w-full min-h-72 lg:h-full'
      },
      handleKeyDown(_, event) {
        if (event.key === 'Enter') {
          event.preventDefault() // Prevent default behavior
          editor
            .chain()
            .focus()
            .setHardBreak() // Insert hard break
            .run()
          return true // Indicate the event has been handled
        }
        return false // Allow other key events to propagate
      }
    },
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    }
  })

  return (
    <section className="text-black font-semibold flex flex-col gap-2 w-full lg:w-5/12">
      <ToolBar editor={editor} />
      <EditorContent
        style={{ whiteSpace: 'pre-line' }}
        editor={editor}
        className="w-full min-h-72 md:min-h-0 flex-grow border-b-2 border-slate-200 outline-0 px-3 py-2 !bg-[#fff7ed]"
      />
    </section>
  )
}

export default Tiptap
