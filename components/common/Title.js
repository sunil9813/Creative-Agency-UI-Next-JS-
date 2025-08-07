export const TitleLogo = ({ className }) => {
  return (
    <h1 className={`${className} title-logo`}>
      <span className="logo-text">UBURIZA SOLUTIONS</span>
      <style jsx>{`
        .title-logo {
          font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 1.1rem;
          color: #003366;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin: 0;
          padding: 0;
        }
        .logo-text {
          color: #003366;
          background: linear-gradient(90deg, #003366 60%, #00dc93 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 3px;
          margin: 0;
          padding: 0;
        }
        @media (max-width: 600px) {
          .title-logo {
            font-size: 0.9rem;
          }
          .logo-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </h1>
  );
};

export const TitleSm = ({ title }) => {
  return <h1 className='titleSm'>{title}</h1>
}
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>
}
