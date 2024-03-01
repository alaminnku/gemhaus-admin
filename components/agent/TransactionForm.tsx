import SubmitButton from '@components/layout/SubmitButton';
import styles from './TransactionForm.module.css';

type Props = {
  buttonText: 'Add Transaction';
  handleSubmit: (formData: FormData) => void;
};

export default function TransactionForm({ buttonText, handleSubmit }: Props) {
  return (
    <form action={handleSubmit}>
      <div className={styles.items}>
        <div className={styles.item}>
          <label htmlFor='address'>Transaction address*</label>
          <input
            type='text'
            id='address'
            name='address'
            placeholder='Enter transaction address'
          />
        </div>
        <div className={styles.item}>
          <label htmlFor='type'>Transaction type*</label>
          <select name='type' id='type'>
            <option hidden aria-hidden value='---Select one---'>
              ---Select one---
            </option>
            <option value='sold'>Sold</option>
            <option value='available'>Available</option>
          </select>
        </div>
      </div>

      <SubmitButton text={buttonText} />
    </form>
  );
}
