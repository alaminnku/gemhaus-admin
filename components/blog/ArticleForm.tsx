import styles from './ArticleForm.module.css';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Article } from 'types';
import RichText from '@components/layout/RichText';
import ImageUpload from '@components/layout/ImageUpload';
import SubmitButton from '@components/layout/SubmitButton';

type Props = {
  article: Article;
  content: string;
  isLoading: boolean;
  buttonText: string;
  setArticle: Dispatch<SetStateAction<Article>>;
  setContent: Dispatch<SetStateAction<string>>;
  handleSubmit: () => Promise<void>;
};

export default function ArticleForm({
  article,
  content,
  isLoading,
  buttonText,
  setArticle,
  setContent,
  handleSubmit,
}: Props) {
  const { title, image, file } = article;

  function handleArticleChange(e: ChangeEvent<HTMLInputElement>) {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <>
      <div className={styles.title}>
        <label htmlFor='title'>Article title</label>
        <input
          type='text'
          id='title'
          name='title'
          value={title}
          onChange={handleArticleChange}
          placeholder='Enter your article title'
        />
      </div>

      {/* <div className={styles.slug}>
        <label htmlFor='slug'>Article slug</label>
        <input
          type='text'
          id='slug'
          value={slug}
          onChange={handleArticleChange}
          placeholder='Enter your article slug'
        />
      </div> */}

      <div className={styles.content}>
        <label>Article content</label>
        <RichText value={content} setValue={setContent} />
      </div>

      <ImageUpload file={file} image={image} setState={setArticle} />
      <SubmitButton buttonText={buttonText} handleSubmit={handleSubmit} />
    </>
  );
}
