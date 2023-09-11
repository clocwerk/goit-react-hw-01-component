import css from './Transactions.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th className={css.row}>Type</th>
          <th className={css.row}>Amount</th>
          <th className={css.row}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.body} key={id}>
              <td className={css.row}>{type}</td>
              <td className={css.row}>{amount}</td>
              <td className={css.row}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
