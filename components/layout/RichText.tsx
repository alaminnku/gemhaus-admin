import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const TOOLBAR_OPTIONS = [
  [{ header: [2, 3, 4, 5, 6, false] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['bold', 'italic', 'underline', 'blockquote'],
  ['clean'],
];

type Props = {
  defaultValue?: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export default function RichText({ setValue, defaultValue }: Props) {
  return (
    <ReactQuill
      theme='snow'
      onChange={setValue}
      defaultValue={defaultValue}
      modules={{ toolbar: TOOLBAR_OPTIONS }}
    />
  );
}
