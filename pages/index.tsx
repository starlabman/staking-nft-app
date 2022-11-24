import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div >
      {/* Top Section */}
      <h1 className={styles.h1}>Temple Dapp & Staking website</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
            <img src={`/icons/drop.webp`} alt="drop" />
            <h2 className={styles.selectBoxTitle}>Mint a new NFT</h2>
            <p className={styles.selectBoxDescription}>
              Mint NFT of this NFT collection to be came a millionnaire in the futur.
            </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <img src={`/icons/token.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
          <p className={styles.selectBoxDescription}>
           Staking your NFT  <b>To win rewards every time</b>{" "}
            to stake your NFTs, and earn tokens from the <b>Token</b> contract.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

// export default function Home() {
//   return (
//     <div >
//       {/* Top Section */}
//       <h1 className={styles.h1}>MonKey Lab NFT</h1>
//       <div className={styles.nftBoxGrid}>
//         <div
//           className={styles.optionSelectBox}
//           role="button"
//           onClick={() => {"hello"}}
//         >
//           {/* Mint a new NFT */}
//             <img src={`/icons/drop.webp`} alt="drop" />
//             <h2 className={styles.selectBoxTitle}>Mint a new NFT</h2>
//             <p className={styles.selectBoxDescription}>
//               Mint NFT of this NFT collection to be came a millionnaire in the futur.
//             </p>
//         </div>

//         <div
//           className={styles.optionSelectBox}
//           role="button"
//           onClick={() => {"hello"}}
//         >
//           {/* Staking an NFT */}
//           <img src={`/icons/token.webp`} alt="drop" />
//           <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
//           <p className={styles.selectBoxDescription}>
//            Staking your NFT  <b>To win rewards every time</b>{" "}
//             to stake your NFTs, and earn tokens from the <b>Token</b> contract.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
