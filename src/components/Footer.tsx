const Footer = () => {
    function getDate() {
        const today = new Date();
        const year = today.getFullYear();
        return `${year}`;
      }

  return (
    <div className="max-w-6xl mx-auto py-5 text-center">
        <p className=" text-gray-400">{ getDate() } samueldlsantos.dev</p>
    </div>
  )
}

export default Footer