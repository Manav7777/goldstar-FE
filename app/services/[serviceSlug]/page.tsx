// app/services/[serviceSlug]/page.tsx
import { notFound } from 'next/navigation';

const servicesData:any = {
  'web-development': {
    title: 'Web Development',
    description: 'Build fast and scalable websites.',
  },
  'seo': {
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings.',
  },
  'graphic-design': {
    title: 'Graphic Design',
    description: 'Creative visuals for your brand.',
  },
};

type Props = {
  params: {
    serviceSlug: string;
  };
};

export default function ServicePage({ params }: Props) {
  const service = servicesData[params.serviceSlug];

  if (!service) return notFound();

  return (
    <div>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
    </div>
  );
}
