import css from './Contact.module.css';

export default function Contact({ name, number, id, onDelete }) {
  return (
    <>
      <div className={css.contactBox}>
        <p>
          {name}
        </p>
        <p>
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
}