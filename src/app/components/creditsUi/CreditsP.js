import './creditsP.css';
import { urban } from '@/fonts';

const CreditsP = () => {
  return (
    <div className={`${urban.className} creditsP__container`}>
      <p>
        Most of my artworks have been exhibited as individual works or as
        several works together. I can’t subscribe to these being described as
        solo exhibitions. The concept of each work is re-articulated through the
        influences, skills, and actions of other people:
      </p>
      <p>
        Looters, grave diggers, an HIV+ Catholic priest, LGBTPQIA+ people, a
        palantypist, teachers, private detectives, spiritual mediums,
        cartoonists, a court artist, photographers, the dead of a village,
        engineers, engravers, letter carvers, glass blowers, typographers,
        cabinetmakers, jewellers, ceramicists, tailors, lighting and sound
        designers, printmakers, graphic designers, artists, video editors, web
        designers, librarians, archivists, chefs, homeless and roofless people,
        art historians, charities and NGOs, creative producers, public
        programmers, curators and commissioners, custodians of insignia,
        archivists, activists, campaigners, school children, technicians,
        writers and artists, and friends.
      </p>
    </div>
  );
};

export default CreditsP;
