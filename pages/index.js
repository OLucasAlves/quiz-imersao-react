import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Button from '../src/components/Button';
import Input from '../src/components/Input';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (

    <QuizBackground backgroundImage={db.bg}>
      <Head>

        <title>Data Science Quiz</title>
        <meta name="title" content="Data Science Quiz" />


        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://quiz-imersao-react.vercel.app/"
        />
        <meta property="og:title" content="Data Science Quiz" />

        <meta
          property="og:image"
          content="https://i.ibb.co/Jj5F7Fv/3842271.jpg"
        />


      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>

          <Widget.Header>
            <h1>Data Science Quiz</h1>
          </Widget.Header>
          <Widget.Content>

            <Widget.Form>
              <form onSubmit={function (e) {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('Fazendo uma submissão por meio do React')
              }}>

                <Input
                  onChange={function (e) {
                    console.log(e.target.value);
                    //name = e.target.value;
                    setName(e.target.value);
                  }}
                  placeholder="Diz ai seu nome" />

                <Button type="submit" disabled={name.length === 0}>
                  Jogar {name}
                </Button>
              </form>
            </Widget.Form>

          </Widget.Content>

        </Widget>

        <Widget>

          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Quizes da Galera</p>
          </Widget.Content>
        </Widget>
        <Footer />

      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/OLucasAlves" />
    </QuizBackground>

  );
}

