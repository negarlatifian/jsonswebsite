import './creditsP.css';
import { urban, oldSchool } from '@/fonts';

const CreditsP = () => {
  return (
    <section className='creditsP__container'>
      <div className={`${urban.className}`}>
        <div className={`${oldSchool.className} creditsP__and`}>
          <h1 className='creditsP__and__h1'>&</h1>
        </div>
        <p className='creditsP__top__p'>
          Most of my artworks have been exhibited as individual works or as
          several works together. I can’t subscribe to these being described as
          solo exhibitions. The concept of each work is re-articulated through
          the influences, skills, and actions of other people:
        </p>
        <p className='creditsP__top__p'>
          Looters, grave diggers, an HIV+ Catholic priest, LGBTPQIA+ people, a
          palantypist, teachers, private detectives, spiritual mediums,
          cartoonists, a court artist, photographers, the dead of a village,
          engineers, engravers, letter carvers, glass blowers, typographers,
          cabinetmakers, jewellers, ceramicists, tailors, lighting and sound
          designers, printmakers, graphic designers, artists, video editors, web
          designers, librarians, archivists, chefs, homeless and roofless
          people, art historians, charities and NGOs, creative producers, public
          programmers, curators and commissioners, custodians of insignia,
          archivists, activists, campaigners, school children, technicians,
          writers and artists, and friends.
        </p>
      </div>
      <div className={`${oldSchool.className} creditsP__h1`}>
        <h1>& TALK TO THE HAND</h1>
      </div>
      <ul className={`${urban.className} creditsP__ul`}>
        <li className='creditsP__li'>
          <p className='creditsP__p'>Pablo Encinas Alonso</p>
          <ul className='bulletPoint__ul'>
            <li className='bulletPoint__li'>
              <p className='bulletPoint__p'>
                3-D modelling for Untitled (Broken Hearted) 2023
              </p>
            </li>
          </ul>
        </li>
        <li className='creditsP__li'>
          <p className='creditsP__p'>Daniel Jewesbury</p>
          <ul className='bulletPoint__ul'>
            <li className='bulletPoint__li'>
              <p className='bulletPoint__p'>
                Assembling of Untitled (One Man Band) 2023
              </p>
            </li>
          </ul>
        </li>
        <li className='creditsP__li cora'>
          <p className='creditsP__p'>Cora Hillerbrand</p>
          <ul className='bulletPoint__ul'>
            <li>
              <p className='bulletPoint__p'>
                Group photography of children who made Untitled (Thunderstorm)
                2003-
              </p>
            </li>
          </ul>
        </li>
        <li className='creditsP__li'>
          <p className='creditsP__p'>Jonathan Lystbæk Jørgensen</p>
          <ul className='bulletPoint__ul'>
            <li className='bulletPoint__li'>
              <p className='bulletPoint__p'>
                3-D modelling for Untitled (His and His) 2023
              </p>
            </li>
          </ul>
        </li>
        <li className='creditsP__li'>
          <p className='creditsP__p'>Alexandra Papademetriou</p>
          <ul className='bulletPoint__ul'>
            <li className='bulletPoint__li'>
              <p className='bulletPoint__p'>
                Typography for Untitled (YOU ARE ALL COMPLETE…) 1998-
              </p>
            </li>
            <li className='bulletPoint__li'>
              <p className='bulletPoint__p'>
                Typography for Untitled (Keyring) 1996-
              </p>
            </li>
            <li className='bulletPoint__li'>
              <p className='bulletPoint__p'>
                Typography and setting for Untitled (His and His) 2023
              </p>
            </li>
          </ul>
        </li>
        <li className='creditsP__li'>
          <p className='creditsP__p'>Ram Krishna Ramjan</p>
          <ul className='bulletPoint__ul'>
            <li className='bulletPoint__li'>
              <p className='bulletPoint__p'>
                Video recording of Untitled (All Apologies) 1994-
              </p>
            </li>
          </ul>
        </li>
        <li className='creditsP__li'>
          <p className='creditsP__p'>Karen Sandberg</p>
          <ul className='bulletPoint__ul'>
            <li className='bulletPoint__li'>
              <p className='bulletPoint__p'>
                Duet on live performance of Untitled (All Apologies) 1994-
              </p>
            </li>
          </ul>
        </li>
        <li className='creditsP__li'>
          <p className='creditsP__p'>Una Sigtryggsdóttir</p>
          <ul className='bulletPoint__ul'>
            <li className='bulletPoint__li'>
              <p className='bulletPoint__p'>
                Permission to use Untitled, 2022.
              </p>
            </li>
          </ul>
        </li>
        <li className='creditsP__li'>
          <p className='creditsP__p'>Azadeh Esmaili Zaghi</p>
          <ul className='bulletPoint__ul'>
            <li className='bulletPoint__li'>
              <p className='bulletPoint__p'>
                Activation of Untitled (Thunderstorm) 2003-
              </p>
            </li>
            <li>
              <p className='bulletPoint__p'>
                Assembling of Untitled (One Man Band) 2023
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default CreditsP;
