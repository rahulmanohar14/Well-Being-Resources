import { Heart, Briefcase, DollarSign, Activity, Users, Clock } from 'lucide-react';

export const resourcesData = [
  {
    id: 'relationships',
    title: 'Relationships',
    icon: Heart,
    description: 'Building meaningful connections and healthy relationships',
    resources: [
      {
        name: 'Campus Counseling Center',
        link: 'https://counseling.example.edu',
        description: 'Professional counseling services for relationship issues, communication skills, and personal growth.'
      },
      {
        name: 'Student Social Groups',
        link: 'https://studentlife.example.edu/groups',
        description: 'Join clubs and organizations to meet like-minded peers and build lasting friendships.'
      },
      {
        name: 'Peer Support Network',
        link: 'https://peersupport.example.edu',
        description: 'Connect with trained peer counselors who understand student life challenges.'
      }
    ]
  },
  {
    id: 'career',
    title: 'Career',
    icon: Briefcase,
    description: 'Professional development and career guidance',
    resources: [
      {
        name: 'Career Development Center',
        link: 'https://careers.example.edu',
        description: 'Resume building, interview prep, and job search strategies tailored for students.'
      },
      {
        name: 'Industry Mentorship Program',
        link: 'https://mentorship.example.edu',
        description: 'Connect with alumni and industry professionals for career guidance and networking.'
      },
      {
        name: 'Internship Portal',
        link: 'https://internships.example.edu',
        description: 'Access exclusive internship opportunities and work-study programs.'
      }
    ]
  },
  {
    id: 'financial',
    title: 'Financial Aid',
    icon: DollarSign,
    description: 'Financial support and money management resources',
    resources: [
      {
        name: 'Financial Aid Office',
        link: 'https://financialaid.example.edu',
        description: 'Scholarships, grants, and student loan guidance to make education affordable.'
      },
      {
        name: 'Emergency Fund Program',
        link: 'https://emergency.example.edu',
        description: 'Short-term financial assistance for unexpected expenses and emergencies.'
      },
      {
        name: 'Financial Literacy Workshops',
        link: 'https://workshops.example.edu/financial',
        description: 'Learn budgeting, saving, and financial planning skills for student life and beyond.'
      }
    ]
  },
  {
    id: 'health',
    title: 'Health',
    icon: Activity,
    description: 'Physical and mental health support services',
    resources: [
      {
        name: 'Student Health Center',
        link: 'https://health.example.edu',
        description: 'Comprehensive healthcare services including preventive care and medical consultations.'
      },
      {
        name: 'Mental Health Resources',
        link: 'https://mentalhealth.example.edu',
        description: 'Counseling services, support groups, and mental health awareness programs.'
      },
      {
        name: 'Campus Recreation',
        link: 'https://recreation.example.edu',
        description: 'Fitness facilities, group classes, and outdoor adventure programs for physical wellness.'
      }
    ]
  },
  {
    id: 'identity',
    title: 'Identity',
    icon: Users,
    description: 'Support for personal identity and belonging',
    resources: [
      {
        name: 'Diversity & Inclusion Center',
        link: 'https://diversity.example.edu',
        description: 'Safe spaces and programs celebrating diverse identities and fostering inclusive communities.'
      },
      {
        name: 'Cultural Organizations',
        link: 'https://cultural.example.edu',
        description: 'Connect with student organizations that celebrate your cultural background and heritage.'
      },
      {
        name: 'LGBTQ+ Support Services',
        link: 'https://lgbtq.example.edu',
        description: 'Resources, support groups, and advocacy for LGBTQ+ students and allies.'
      }
    ]
  },
  {
    id: 'time-management',
    title: 'Time Management',
    icon: Clock,
    description: 'Tools and strategies for academic and personal success',
    resources: [
      {
        name: 'Academic Success Center',
        link: 'https://success.example.edu',
        description: 'Study skills workshops, time management coaching, and academic planning resources.'
      },
      {
        name: 'Productivity Apps & Tools',
        link: 'https://tools.example.edu',
        description: 'Access to student-licensed productivity software and organizational tools.'
      },
      {
        name: 'Study Groups & Tutoring',
        link: 'https://tutoring.example.edu',
        description: 'Peer tutoring services and collaborative study groups for all subjects.'
      }
    ]
  }
];