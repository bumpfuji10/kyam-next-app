type OgpData = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export default function OgpCard({ title, description, image, url }: OgpData) {
return (
    <div className="ogp-card">
      <a href={url} target="_blank" rel="noopener noreferrer" style={{
        borderRadius: '8px',
      }}>
        <div style={{ margin: '10px 0', display: 'flex', border: '1px solid #374151', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#1F2937' }}>
          {image && <img src={image} alt="OGP Image" width="300" />}
          <div className="ogp-card__content" style={{ padding: '10px', backgroundColor: '#111827', color: 'white', width: '100%' }}>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </a>
    </div>
  )
}
