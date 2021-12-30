import { FC } from 'react';

interface Props {
  title: string;
  price: string;
  avatar: any;
}

export const MessageBox: FC<Props> = ({ title, price, avatar }) => {
  return (
    <div className="message-body">
      <div className="message-avatar">
        <div className="avatar">
          <img src={avatar} alt="tv-e-learning" />
        </div>
      </div>
      <div className="message-content">
        <p>{title}</p>
        <p style={{ color: 'red' }}>{price}</p>
      </div>
    </div>
  );
};
