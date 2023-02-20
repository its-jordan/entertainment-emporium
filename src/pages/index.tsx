import { Section } from 'components/Section';
import Link from 'next/link';

export default function HomePage() {
  let Array: string[][] = [
    ['Home', '/'],
    ['Online Calculator', '/calculator'],
    ['Buy The Game!', '/purchase'],
    ['Contact Us', '/contact'],
  ];
  return (
    <div className="">
      <div className="body-container">
        <img
          src="game-board.jpg"
          alt="Game Board Background"
          className="opacity-[.03] fixed block h-full w-full object-cover z-[-10]"></img>
        <div className="nav-container">
          <div className="nav-link-container">
            <div>
              <img src="logo.png" alt="Entertainment Emporium Logo" className="h-24"></img>
            </div>
            <nav className="top-nav justify-center items-center h-16">
              {Array.map(([title, url]) => (
                <Link key={title} href={url} className="nav-link">
                  {title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <Section image="attractionCardSingle.png">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis
            mollitia ducimus veniam, voluptates reprehenderit? Soluta iste nam sequi quia accusamus
            delectus optio cupiditate ducimus sit, quo iure natus deserunt? Quis, iste blanditiis
            vero saepe soluta est voluptas dicta. Neque voluptates temporibus esse impedit nostrum
            iusto tenetur facere hic reprehenderit error porro aspernatur labore ratione amet,
            quaerat nisi cum commodi? Sunt, possimus cupiditate. Amet officia non quas voluptate
            odio corporis eum reprehenderit ipsum, fuga sint blanditiis exercitationem excepturi
            doloribus, quibusdam repellendus unde, vitae dignissimos cupiditate at explicabo?
            Reiciendis, vero reprehenderit. Dolor qui porro omnis repellendus harum provident
            nesciunt eligendi assumenda incidunt, sint a laboriosam ratione cupiditate facere
            tenetur dolorum sequi! Magni ipsam cum, recusandae aspernatur adipisci distinctio ut.
            Dolore, et? Laborum qui, autem aliquam, aliquid omnis, cum vel repellendus ipsa placeat
            modi incidunt voluptatum accusamus eum officiis facere eveniet necessitatibus quis!
            Deleniti, laboriosam inventore facilis odit vero eius est veritatis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, repudiandae
            eligendi recusandae rem, quaerat quis saepe sint excepturi, aut sit culpa architecto
            dolorem odit illo. Magni odit temporibus natus nostrum? Tenetur repellendus maiores,
            autem unde quisquam eum, delectus possimus impedit asperiores deserunt, quaerat facilis
            necessitatibus quas nobis aspernatur quibusdam consequatur harum? Itaque, illo impedit
            alias asperiores atque nihil dicta explicabo. Vel magni laboriosam est doloremque ex
            dolor quasi repudiandae architecto modi. Minima, id praesentium laboriosam omnis
            inventore dolore eaque aperiam, nulla porro accusamus, veniam provident sit incidunt
            neque veritatis et? Labore dolores porro ipsa quisquam ipsum incidunt, saepe
            necessitatibus praesentium ex excepturi quos culpa, quasi maiores vel quidem sapiente
            illo natus reiciendis ea adipisci inventore neque. Dolor unde error id. Dolores
            perspiciatis iste magnam voluptas vitae? Voluptatem ducimus molestias perferendis
            recusandae quia corrupti ex sint tempora dolorum provident maxime quos eos, libero natus
            repudiandae quam blanditiis amet aut laudantium aliquam!
          </p>
        </Section>
      </div>
    </div>
  );
}
