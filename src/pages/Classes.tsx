import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Calendar, Award, CheckCircle, Star, ChefHat, Sparkles, ArrowRight, Users, BookOpen, GraduationCap, Heart, Zap } from 'lucide-react';

const Classes: React.FC = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 'basic',
      title: 'Basic Baking Class',
      subtitle: 'Perfect for Beginners',
      duration: '3 Days',
      type: 'Foundational Course',
      schedule: '10:30 AM - 2:00 PM',
      level: 'Beginner Friendly',
      image: '/photo/pt5.jpg',
      description: 'Perfect for beginners, our Basic Baking Class will teach you the fundamentals of baking. You\'ll learn to create delicious cakes, cookies, brownies, and more, with step-by-step guidance.',
      highlights: [
        'Vanilla & Chocolate Sponge Cakes',
        'Brownies & Cupcakes',
        'Coconut Cookies',
        'Tea Cakes & Other Desserts'
      ],
      benefits: [
        'Beginner-friendly curriculum',
        'All ingredients provided',
        'Take-home recipe booklet'
      ],
      popular: false,
      color: {
        primary: 'from-amber-500 to-orange-500',
        secondary: 'from-amber-50 to-orange-50',
        badge: 'bg-amber-500',
        text: 'text-amber-600',
        hover: 'hover:from-amber-600 hover:to-orange-600'
      }
    },
    {
      id: 'master',
      title: 'Master Baking Class',
      subtitle: 'Perfect Your Craft',
      duration: '12 Days',
      type: 'Comprehensive Program',
      schedule: '10:30 AM - 2:00 PM',
      level: 'Expert',
      image: '/photo/pt3.jpg',
      description: 'Our Master Baking Class is designed for those who want to perfect their craft. You will learn professional techniques, creating everything from elegant pastries to sophisticated multi-layered cakes.',
      highlights: [
        'Multi-layered Cakes & Tiered Wedding Cakes',
        'Advanced Buttercream & Fondant Artistry',
        'Unique Pastries & French Macarons'
      ],
      benefits: [
        'Master certification',
        'Professional portfolio guidance',
        'Lifetime recipe access'
      ],
      popular: true,
      color: {
        primary: 'from-blue-500 to-cyan-500',
        secondary: 'from-blue-50 to-cyan-50',
        badge: 'bg-blue-500',
        text: 'text-blue-600',
        hover: 'hover:from-blue-600 hover:to-cyan-600'
      }
    },
    {
      id: 'advanced',
      title: 'Advanced Baking Class',
      subtitle: 'Take Your Skills to the Next Level',
      duration: '7 Days',
      type: 'Advanced Program',
      schedule: '10:30 AM - 2:00 PM',
      level: 'Advanced',
      image: '/photo/pt6.jpg',
      description: 'Ready to take your skills to the next level? The Advanced Baking Class focuses on more complex recipes and techniques. From wedding cakes to buttercream frosting, you\'ll become a baking expert.',
      highlights: [
        'Wedding Cakes & Themed Cakes',
        'Fondant Icing & Advanced Decoration',
        'Specialty Cookies & More'
      ],
      benefits: [
        'Advanced certification',
        'Professional recipe collection',
        'Small batch - max 6 students'
      ],
      popular: false,
      color: {
        primary: 'from-rose-500 to-pink-600',
        secondary: 'from-rose-50 to-pink-50',
        badge: 'bg-rose-500',
        text: 'text-rose-600',
        hover: 'hover:from-rose-600 hover:to-pink-700'
      }
    }
  ];

  const features = [
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: 'Expert Instructors',
      description: 'Learn from certified professionals with years of industry experience'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Certified Programs',
      description: 'FSSAI certified courses with official completion certificates'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Small Batch Training',
      description: 'Maximum 6-8 students per batch for personalized attention'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Hands-On Learning',
      description: 'Practical training with all ingredients and equipment provided'
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: 'Lifetime Support',
      description: 'Ongoing guidance and recipe updates even after course completion'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Passion-Driven',
      description: 'Learn in a supportive environment that nurtures your baking passion'
    }
  ];

  const handleLearnMore = (courseId: string) => {
    navigate(`/course/${courseId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
              <Sparkles className="h-4 w-4" />
              <span>Professional Baking Education</span>
              <Sparkles className="h-4 w-4" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Master the Art of
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Professional Baking
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
              Discover the joy of baking with our expertly designed baking courses. Whether you're a beginner or looking to refine your skills, we have the perfect class for you!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <a
                href="tel:8248477869"
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
              >
                Call: 8248477869
              </a>
              <a
                href="https://wa.me/918248477869"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our
              <span className="block bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                Baking Classes?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive learning experience that combines professional expertise, 
              hands-on training, and a supportive community environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-b from-white via-pink-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              <Zap className="h-4 w-4" />
              <span>Now Enrolling - Limited Seats</span>
              <Zap className="h-4 w-4" />
            </div>

            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
                Choose Your
                <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                  Learning Journey
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our Baking Courses are designed to take you from beginner to expert. Each course builds upon the previous one, 
                ensuring you develop comprehensive skills and confidence in the art of baking.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group ${
                  course.popular ? 'ring-4 ring-blue-500 ring-offset-4 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {course.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1 animate-bounce">
                      <Star className="h-3 w-3 fill-current" />
                      <span>MOST POPULAR</span>
                    </div>
                  </div>
                )}

                <div className="relative h-64 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className={`inline-block ${course.color.badge} text-white px-3 py-1 rounded-full text-xs font-bold mb-2`}>
                      {course.type}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {course.title}
                    </h3>
                    <p className="text-pink-100 text-sm">{course.subtitle}</p>
                  </div>
                </div>

                <div className="p-6 space-y-5">
                  <p className="text-gray-600 text-sm leading-relaxed min-h-[60px]">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-3 gap-3">
                    <div className={`bg-gradient-to-br ${course.color.secondary} p-3 rounded-xl text-center group-hover:scale-105 transition-transform duration-300`}>
                      <Calendar className={`h-5 w-5 ${course.color.text} mx-auto mb-1`} />
                      <p className="text-xs text-gray-600 font-medium mb-0.5">Duration</p>
                      <p className="text-sm font-bold text-gray-900">{course.duration}</p>
                    </div>

                    <div className={`bg-gradient-to-br ${course.color.secondary} p-3 rounded-xl text-center group-hover:scale-105 transition-transform duration-300`}>
                      <Clock className={`h-5 w-5 ${course.color.text} mx-auto mb-1`} />
                      <p className="text-xs text-gray-600 font-medium mb-0.5">Daily</p>
                      <p className="text-sm font-bold text-gray-900">3.5 hrs</p>
                    </div>

                    <div className={`bg-gradient-to-br ${course.color.secondary} p-3 rounded-xl text-center group-hover:scale-105 transition-transform duration-300`}>
                      <Users className={`h-5 w-5 ${course.color.text} mx-auto mb-1`} />
                      <p className="text-xs text-gray-600 font-medium mb-0.5">Batch</p>
                      <p className="text-sm font-bold text-gray-900">6-8</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold text-gray-900 flex items-center space-x-2">
                        <ChefHat className={`h-4 w-4 ${course.color.text}`} />
                        <span>Key Highlights</span>
                      </h4>
                      <span className="text-xs text-gray-500">{course.highlights.length} modules</span>
                    </div>
                    <div className="space-y-2 max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-gray-100">
                      {course.highlights.slice(0, 5).map((highlight, index) => (
                        <div key={index} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                      {course.highlights.length > 5 && (
                        <p className="text-xs text-gray-500 italic pl-6">+{course.highlights.length - 5} more topics...</p>
                      )}
                    </div>
                  </div>

                  <div className={`bg-gradient-to-br ${course.color.secondary} p-4 rounded-xl border border-gray-200`}>
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className={`h-4 w-4 ${course.color.text}`} />
                      <p className="text-xs font-bold text-gray-800">Course Benefits</p>
                    </div>
                    <div className="space-y-1.5">
                      {course.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2 text-xs text-gray-700">
                          <div className={`h-1.5 w-1.5 rounded-full ${course.color.badge}`}></div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleLearnMore(course.id)}
                    className={`w-full bg-gradient-to-r ${course.color.primary} ${course.color.hover} text-white px-6 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    Level: <span className="font-semibold text-gray-700">{course.level}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex justify-center">
                <div className="bg-pink-500 p-4 rounded-full">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Start Your Baking Journey?
              </h3>
              <p className="text-gray-300 text-lg">
                Join hundreds of successful students who have transformed their passion into professional skills. 
                Limited seats available for the next batch!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="tel:8248477869"
                  className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Call: 8248477869
                </a>
                <a
                  href="https://wa.me/918248477869"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;
