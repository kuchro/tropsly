import { useRouter } from "next/router";
import Link from "next/link";
import MensComponent from 'common/components/mens/index.js'

const MensPage = () => {
  return (
    <div>
      <h1>The mens page</h1>
      <MensComponent />
    </div>
  );
};

export default MensPage;
