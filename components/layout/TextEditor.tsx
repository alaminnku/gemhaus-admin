import React, { Dispatch, SetStateAction } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TOOLBAR_OPTIONS = [
  [{ header: [2, 3, 4, 5, 6, false] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['bold', 'italic', 'underline', 'blockquote'],
  ['clean'],
];

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export default function TextEditor({ value, setValue }: Props) {
  return (
    <ReactQuill
      theme='snow'
      value={value}
      onChange={setValue}
      modules={{ toolbar: TOOLBAR_OPTIONS }}
    />
  );
}
