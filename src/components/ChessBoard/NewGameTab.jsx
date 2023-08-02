const NewGameTab = () => {
    const [showDropdown, setShowDropdown] = useState(false);
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    return (
      <div>
        <div>
          <button onClick={toggleDropdown}>Select Game</button>
          {/* {showDropdown && <CardGrid />} */}
        </div>
        <button>Play</button>
        <button>Play with a Friend</button>
      </div>
    );
  };