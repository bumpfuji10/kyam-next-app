import ogpCardStyles from './ogpCard.module.scss';

type OgpData = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function OgpCard({ title, description, image, url }: OgpData) {
return (
    <div className="ogpCard">
      <a className={ogpCardStyles.ogpCard__cardLink} href={url} target="_blank" rel="noopener noreferrer">
        <div className={ogpCardStyles.ogpCard__content}>
          {image && <img className="ogpCard__leftImage" src={image} alt="OGP Image" width="300" />}
          <div className={ogpCardStyles.ogpCard__rightText}>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  )
}
