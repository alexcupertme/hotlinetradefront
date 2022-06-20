import React from 'react'

const EmptyMessage: React.FC = ({ }): JSX.Element => {
  
  return (
    <>
        <div style={{padding: '24px'}}>
        Нет записей для отображения
        </div>
    </>
  );
};

export default EmptyMessage;
