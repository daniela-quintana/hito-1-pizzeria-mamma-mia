const SocialButton = ({icon}) => {
  return (
    <>
      <div className="icon-container border border-black rounded-circle py-3 px-3 d-flex">
        <i className={icon}></i>
      </div>

    </>
  );
};

export default SocialButton;
