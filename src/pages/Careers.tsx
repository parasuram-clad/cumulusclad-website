import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, MapPin, Clock, ArrowRight, Heart, Coffee, Zap, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const cultureImages = [
    { title: 'Team Collaboration', image: 'bg-gradient-to-br from-blue-400 to-blue-600' },
    { title: 'Innovation Labs', image: 'bg-gradient-to-br from-purple-400 to-purple-600' },
    { title: 'Office Spaces', image: 'bg-gradient-to-br from-green-400 to-green-600' },
    { title: 'Team Events', image: 'bg-gradient-to-br from-orange-400 to-orange-600' },
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI/ML Engineer',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Build cutting-edge AI solutions for our enterprise clients across India. Work with TensorFlow, PyTorch, and cloud platforms.',
      requirements: ['Master\'s in CS/AI', 'Experience with ML frameworks', 'Python expertise', 'Cloud platform knowledge']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      location: 'Mumbai, India', 
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Develop scalable web applications using React, Node.js, and cloud technologies for Indian enterprises.',
      requirements: ['React/Node.js expertise', 'Database design', 'AWS/Azure experience', 'Agile methodology']
    },
    {
      id: 3,
      title: 'Cloud Architect',
      location: 'Delhi NCR, India',
      type: 'Full-time', 
      experience: '6-8 years',
      description: 'Design and implement cloud infrastructure for large-scale Indian enterprises moving to digital platforms.',
      requirements: ['AWS/Azure certifications', 'Kubernetes expertise', 'DevOps experience', 'Architecture design']
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      location: 'Hyderabad, India',
      type: 'Full-time',
      experience: '2-4 years', 
      description: 'Create intuitive user experiences for mobile and web applications serving millions of Indian users.',
      requirements: ['Design portfolio', 'Figma/Adobe Suite', 'User research', 'Prototyping skills']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-luxury-red/5 to-luxury-red/10" />
          <div className="container-luxury relative z-10 text-center">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-center space-x-3 text-luxury-red font-medium">
                <Users className="h-5 w-5" />
                <span className="tracking-wider uppercase text-sm">Join Our Team</span>
              </div>
              
              <h1 className="text-hero text-charcoal">
                Build the Future of <span className="text-gradient-primary">Indian Technology</span>
              </h1>
              
              <p className="text-xl text-dark-gray max-w-4xl mx-auto leading-relaxed">
                Join CumulusClad's mission to transform India's digital landscape. Work on cutting-edge 
                projects with the best minds in technology while making a real impact.
              </p>
            </div>
          </div>
        </section>

        {/* Life at CumulusClad */}
        <section className="section-padding bg-soft-gray">
          <div className="container-luxury">
            <div className="text-center mb-16">
              <h2 className="text-section-title text-charcoal mb-6">Life at CumulusClad</h2>
              <p className="text-xl text-dark-gray max-w-3xl mx-auto">
                Experience a culture of innovation, collaboration, and growth in our state-of-the-art offices across India.
              </p>
            </div>

            {/* Culture Images Carousel */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {cultureImages.map((image, index) => (
                <Card key={image.title} className="card-luxury group overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-0">
                    <div className={`h-48 ${image.image} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                      <div className="text-white font-semibold text-lg">{image.title}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Culture Values */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="card-luxury text-center">
                <CardContent className="p-6">
                  <Heart className="h-12 w-12 text-luxury-red mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Work-Life Balance</h3>
                  <p className="text-dark-gray text-sm">Flexible hours and remote work options</p>
                </CardContent>
              </Card>
              
              <Card className="card-luxury text-center">
                <CardContent className="p-6">
                  <Zap className="h-12 w-12 text-luxury-red mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Innovation First</h3>
                  <p className="text-dark-gray text-sm">20% time for personal projects and learning</p>
                </CardContent>
              </Card>
              
              <Card className="card-luxury text-center">
                <CardContent className="p-6">
                  <Coffee className="h-12 w-12 text-luxury-red mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Great Benefits</h3>
                  <p className="text-dark-gray text-sm">Health insurance, meals, and wellness programs</p>
                </CardContent>
              </Card>
              
              <Card className="card-luxury text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-luxury-red mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Growth Opportunities</h3>
                  <p className="text-dark-gray text-sm">Learning budget and career advancement paths</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="text-center mb-16">
              <h2 className="text-section-title text-charcoal mb-6">Current Openings</h2>
              <p className="text-xl text-dark-gray">Join our growing team and help build India's digital future</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {jobOpenings.map((job, index) => (
                <Card 
                  key={job.id} 
                  className="card-luxury cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-charcoal mb-2 font-space-grotesk">{job.title}</h3>
                          <div className="flex items-center space-x-6 text-dark-gray text-sm">
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4" />
                              <span>{job.experience}</span>
                            </div>
                          </div>
                        </div>
                        <ArrowRight className={`h-5 w-5 text-luxury-red transition-transform duration-300 ${
                          expandedJob === job.id ? 'rotate-90' : ''
                        }`} />
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedJob === job.id && (
                      <div className="border-t border-medium-gray/30 p-6 space-y-4 animate-fade-in">
                        <div>
                          <h4 className="font-semibold text-charcoal mb-2">Description</h4>
                          <p className="text-dark-gray">{job.description}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-charcoal mb-2">Requirements</h4>
                          <ul className="space-y-1">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-dark-gray">
                                <div className="w-1.5 h-1.5 bg-luxury-red rounded-full" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4">
                          <Button className="btn-luxury">
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-dark-gray mb-4">Don't see the right role? We're always looking for exceptional talent.</p>
              <Button variant="outline" className="btn-luxury-outline">
                Send Your Resume
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;