import { Link } from 'react-router-dom';
import Image from 'next/image';
import styles from './wellness.module.scss';
import HOME_IMAGE from '../../../public/wellness/main.jpg';
import { SharedHeader } from '@poc/ui';

const Wellness = () => {
  return (<main>
    <SharedHeader />
   <div className={styles.about}>
    <Image src={HOME_IMAGE} alt="wellness" width={640} height={426} />

    <main>
    <strong>웰니스?</strong>
    <section>
    웰니스(Wellness)는 세계보건기구(WHO)가 국제적으로 제시한 건강에 대한 정의를 보다 심화시켜 광범위한 관점에서 접근한 새로운 건강관을 의미한다. 1961년 미국 의학자 헐버트 던 (Halbert L. Dunn) 박사가 처음 웰니스라는 개념을 제창했다. 보다 쉬운 말로 정의하면, 웰니스는 생활과학으로서 운동을 일상생활에 적절하게 도입해 건강하게 하루하루의 삶을 보낸다는 의미에서 만들어진 개념이다.
    </section>
    </main>
    <nav>
      <ul>
        <li>
          <Link className={styles.link} to="/">홈으로 돌아가기</Link>
        </li>
      </ul>
    </nav>
    </div>
  </main>)
}

export default Wellness;