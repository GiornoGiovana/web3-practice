import { useMoralis } from "react-moralis";

export default function Changeusername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new username (current: ${user.getUsername()})`
    );

    if (!username) return;

    setUserData({
      username,
    });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className="hover:text-pink-700"
      >
        Change your Username
      </button>
    </div>
  );
}
