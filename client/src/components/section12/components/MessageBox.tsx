import { FC } from 'react';
import Uri from 'imgs/uri.png';

interface Props {
  title: string;
  price: string;
}

export const MessageBox: FC<Props> = ({ title, price }) => {
  return (
    <div className="message-body">
      <div className="message-avatar">
        <div className="avatar">
          <img src={Uri} alt="tv-e-learning" />
        </div>
      </div>
      <div className="message-content">
        <p>{title}</p>
        <p style={{ color: 'red' }}>{price}</p>
      </div>
    </div>
  );
};
