'use client'

import { forwardRef } from 'react'
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
import Highlight from '@tiptap/extension-highlight'
import { FontSize } from './fontSizeExtension'
import { useEditor, EditorContent } from '@tiptap/react'
import { ToolBar, LoadingSpinner } from '..'

const Tiptap = forwardRef(({ onChange, card }, ref) => {
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
      TextAlign.configure({
        types: ['paragraph']
      }),
      Highlight.configure({ multicolor: true })
    ],
    editorProps: {
      attributes: {
        class: 'flex-grow'
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
    <section className="text-black font-semibold flex flex-col gap-2 w-full flex-grow relative">
      <ToolBar editor={editor} />

      <div
        ref={ref}
        className={`p-1.5 flex-grow flex relative z-50 min-h-[calc(100vh-10rem)] md:min-h-[unset]`}
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${
            card?.img ||
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9UlEQVR4nO3cT2sTQRjH8YC0otIKQd+AHhRaT+LJu6K3Unq3CB48Cd4FwatFS/0DvRTxVUj1NVS0UPQi9V7RVhQ1fmXtHEJINsnOMzt5kt8HvO48M7+4z07SnUZDRERERERERERERESkA3ABeAy8Bw6Qg7AWj4D5ZB8Y4CjwFGhpzXsq1uYJMJ1i8d/0Hlc6vDYNAXjWOYL0tWZ5z9dtZ3h/gDmLAIqGK9WsWASwXXFwgXcWAexrJSv7ZhGARFAAmSmAzBRAZgogMwWQmQLITAFk5jWAXWARmAn/FoAdHPIYwC7Q7FJHE/iMMx4DWCypZQlnPAYwU1LLLM6MWwAnccZjAAsltRSN2RWPAeyUNOEPOOMxAMLTzlK458+GT767xfccwNhQAJkpgMwUQGYK4NALYIMMFABsAceAEzn+xGbSA9gDzrTNZQ74XmcBkxxAC7jeZT7LdRYxyQHcL5lTbf1gUgPYBI6UzKm2fuAlgPXw8ofVDzqnBphXLf3AQwBb4SllKnxyY/wELg0xt+VJD2Cv4ykl9hvPWxXmtzGpAbSAa13GOwd8qXC9lxXnl7QfjHIA90rGvAL8HuJab4HjEXNM1g8qL3xbcSm8KntKKQB3BrxW8b/lbCNSqn4wigF8GuQppQA873Otv2U/YY5CP7AoytIP4OIQY0/1eT32QfQEE/cDi6Is3awwfhP42ONd3NLb2Cj0A4uCrKxH1HC+48mo2Gydjp5cDf3AohizzVZkHVfDu7e/gMvRE6upH1gUYrrZiqzlLnDb4lp19QOLQsw3W15w2A+iToSxKCLJZssLIvuBRQHJNltexPQDi8GTbrY8iOkHFoMn3Wx5UXV/YDFw8s2WF8ANDwFIGwWQmQLITAGMQQA6sKm6rxYB6MiyzEeWFSfCSjUPLQKYD18DS45jK0MIxXG8MpxVk8UPAUyHnwBlMJspzo8uQljT7ajvbWfVfPG7fCm1UnR4PaL+tx/WYsXsni8iIiIiIiIiIiIiIo1x8g+BesPYVKTjNgAAAABJRU5ErkJggg=='
          })`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: card?.img ? 'cover' : 'auto',
          backgroundOrigin: 'border-box'
        }}
      >
        {card?.img && (
          <EditorContent
            style={{ whiteSpace: 'pre-line' }}
            editor={editor}
            className="flex-grow flex outline-0 px-1 py-1"
          />
        )}
      </div>
      {card?.img && (
        <LoadingSpinner className="absolute top-1/2 left-1/2 w-10 h-10 z-0 border-4 text-white" />
      )}
    </section>
  )
})

export default Tiptap
