import styles from './ArticleForm.module.css';
import { Dispatch, SetStateAction } from 'react';
import { Article } from 'types';
import RichText from '@components/layout/RichText';
import SubmitButton from '@components/layout/SubmitButton';

type Props = {
  article?: Article;
  buttonText: 'Add Article' | 'Edit Article';
  setContent: Dispatch<SetStateAction<string>>;
  handleSubmit: (formData: FormData) => Promise<void>;
};

export default function ArticleForm({
  article,
  buttonText,
  setContent,
  handleSubmit,
}: Props) {
  return (
    <form action={handleSubmit}>
      <div className={styles.title}>
        <label htmlFor='title'>Article title*</label>
        <input
          type='text'
          id='title'
          name='title'
          defaultValue={article?.title}
          placeholder='Enter your article title'
        />
      </div>

      <div className={styles.content}>
        <label>Article content*</label>
        <RichText defaultValue={article?.content} setValue={setContent} />
      </div>

      {article?.image && (
        <img className={styles.article_image} src={article.image} />
      )}

      {!article && (
        <div className={styles.file}>
          <label htmlFor='file'>Upload article image*</label>
          <input type='file' id='file' name='file' accept='image/*' />
        </div>
      )}

      <SubmitButton text={buttonText} />
    </form>
  );
}
