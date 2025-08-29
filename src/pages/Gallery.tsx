import React, { useState } from 'react';
import { ArrowLeft, Heart, Share2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Work', count: 24 },
    { id: 'bridal', name: 'Bridal', count: 12 },
    { id: 'engagement', name: 'Engagement', count: 6 },
    { id: 'special-events', name: 'Special Events', count: 6 }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'bridal',
      title: 'Classic Bridal Look',
      description: 'Timeless elegance with soft glam',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=600&fit=crop',
      beforeImage: 'https://images.unsplash.com/photo-1494790108755-2616c9c0e6b4?w=500&h=600&fit=crop'
    },
    {
      id: 2,
      category: 'bridal',
      title: 'Dramatic Bridal Glam',
      description: 'Bold eyes with natural skin',
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&h=600&fit=crop',
      beforeImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop'
    },
    {
      id: 3,
      category: 'engagement',
      title: 'Romantic Engagement',
      description: 'Soft and romantic for photos',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&h=600&fit=crop',
      beforeImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop'
    },
    {
      id: 4,
      category: 'bridal',
      title: 'Vintage Bridal Style',
      description: 'Classic vintage-inspired look',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=600&fit=crop',
      beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop'
    },
    {
      id: 5,
      category: 'special-events',
      title: 'Evening Glam',
      description: 'Perfect for special occasions',
      image: 'https://images.unsplash.com/photo-1506629905607-c28b47e9c9b0?w=500&h=600&fit=crop',
      beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop'
    },
    {
      id: 6,
      category: 'engagement',
      title: 'Natural Engagement Look',
      description: 'Fresh and natural beauty',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=600&fit=crop',
      beforeImage: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=600&fit=crop'
    },
    {
      id: 7,
      category: 'bridal',
      title: 'Boho Bridal Beauty',
      description: 'Effortless boho chic style',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop',
      beforeImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=600&fit=crop'
    },
    {
      id: 8,
      category: 'special-events',
      title: 'Red Carpet Ready',
      description: 'Glamorous event makeup',
      image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&h=600&fit=crop',
      beforeImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=600&fit=crop'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="section-title">Our Portfolio</h1>
            <p className="section-subtitle">
              Discover the artistry behind every transformation. Each look tells a unique story of beauty and confidence.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "romantic-button" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 bg-primary-100 text-primary-800">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <Card key={item.id} className="gallery-item group overflow-hidden">
                <div className="relative aspect-[4/5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                    onClick={() => openLightbox(item.image)}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground capitalize">
                      {item.category.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Before/After Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="section-title">Before & After Transformations</h2>
              <p className="section-subtitle">
                See the incredible transformations that showcase our expertise and artistry.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {galleryItems.slice(0, 4).map(item => (
                <Card key={`ba-${item.id}`} className="elegant-card overflow-hidden">
                  <div className="grid grid-cols-2">
                    <div className="relative aspect-square">
                      <img
                        src={item.beforeImage}
                        alt="Before"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-4">
                        <Badge variant="secondary" className="bg-black/70 text-white">
                          Before
                        </Badge>
                      </div>
                    </div>
                    <div className="relative aspect-square">
                      <img
                        src={item.image}
                        alt="After"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">
                          After
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="elegant-card p-8 bg-gradient-to-r from-primary-50 to-secondary-50">
              <h3 className="font-serif text-2xl font-semibold mb-4">Ready for Your Transformation?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's create your perfect look together. Book a consultation to discuss your vision and bring it to life.
              </p>
              <Button 
                onClick={() => navigate('/booking')}
                className="romantic-button"
              >
                Book Your Session
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery item"
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="secondary"
              size="sm"
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/90 text-black hover:bg-white"
            >
              ✕
            </Button>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;