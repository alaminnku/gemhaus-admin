import styles from './ArticleForm.module.css';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Article } from 'types';
import RichText from '@components/layout/RichText';
import SingleImageUpload from '@components/layout/SingleImageUpload';
import SubmitButton from '@components/layout/SubmitButton';

type Props = {
  article?: Article;
  content: string;
  buttonText: string;
  setContent: Dispatch<SetStateAction<string>>;
  handleSubmit: (formData: FormData) => Promise<void>;
};

export default function ArticleForm({
  article,
  content,
  buttonText,
  setContent,
  handleSubmit,
}: Props) {
  return (
    <form action={handleSubmit}>
      <div className={styles.title}>
        <label htmlFor='title'>Article title</label>
        <input
          type='text'
          id='title'
          name='title'
          defaultValue={article?.title}
          placeholder='Enter your article title'
        />
      </div>

      <div className={styles.content}>
        <label>Article content</label>
        <RichText value={content} setValue={setContent} />
      </div>

      <div className={styles.file}>
        <input type='file' name='file' accept='image/*' />
      </div>

      <SubmitButton text={buttonText} />
    </form>
  );
}
