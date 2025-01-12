import ReactDOM from 'react-dom';

function Modal({ children }: { children: React.ReactNode }) {
  if (typeof window === 'undefined') return null; // SSR 환경 방지

  return ReactDOM.createPortal(
    <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'>
      {children}
    </div>,
    document.body // 모달을 document.body에 렌더링
  );
}

export default Modal;
