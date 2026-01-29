import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, DollarSign, TrendingUp, Zap, Target, Award, Rocket, Code, Globe, ArrowLeft, Calendar, BookOpen, Lightbulb, Trophy, Users, Brain } from 'lucide-react';

export default function DjangoMasteryVision() {
  const [activePhase, setActivePhase] = useState(null);
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phases = [
    {
      id: 0,
      title: "CORE FOUNDATION",
      status: "complete",
      duration: "✓ PRODUCTION READY",
      color: "from-emerald-500 to-teal-600",
      icon: CheckCircle,
      skills: [
        "Django ORM (filters/annotations/F-expressions)",
        "DRF ViewSets + Nested Serializers + Permissions",
        "JWT Auth (SimpleJWT) + Custom User Model",
        "Celery (retries/countdown/idempotent)",
        "Docker-compose (web+celery+redis+postgres)"
      ],
      impact: "Foundation Complete - Ready to Build Real Products",
      roadmap: {
        description: "Your solid foundation - the bedrock upon which your entire freelance career stands. These are the skills that separate hobbyists from professionals.",
        milestones: [
          {
            week: "Foundation Week",
            title: "Django ORM Mastery",
            learningPath: [
              { day: "Day 1-2", focus: "Complex Queries", goal: "Master select_related, prefetch_related, annotate, and aggregate. Build a blog with optimized queries." },
              { day: "Day 3-4", focus: "F & Q Objects", goal: "Learn field comparisons, complex filters, and database-level calculations. Create a product filtering system." },
              { day: "Day 5-7", focus: "Raw SQL Integration", goal: "Know when ORM isn't enough. Write raw SQL for complex reports, understand query execution plans." }
            ],
            outcomes: ["Zero N+1 queries in your code", "Understand database indexing", "Can explain EXPLAIN ANALYZE"]
          },
          {
            week: "API Week",
            title: "DRF Professional Patterns",
            learningPath: [
              { day: "Day 8-10", focus: "ViewSets & Routers", goal: "Build CRUD APIs in minutes. Understand when to use ViewSet vs APIView vs function-based views." },
              { day: "Day 11-12", focus: "Nested Serializers", goal: "Handle complex data structures. Build a nested API for Orders → OrderItems → Products." },
              { day: "Day 13-14", focus: "Permission Systems", goal: "Implement IsOwner, IsAdmin, custom permissions. Secure every endpoint properly." }
            ],
            outcomes: ["Can build full REST API in 1 day", "Understand serializer context", "Master permission inheritance"]
          },
          {
            week: "Production Week",
            title: "Auth & Async & Docker",
            learningPath: [
              { day: "Day 15-16", focus: "JWT Authentication", goal: "Implement SimpleJWT, custom user model, refresh tokens, blacklisting. Secure production-ready auth." },
              { day: "Day 17-19", focus: "Celery Mastery", goal: "Build async email system, implement retries, countdown, idempotent tasks. Monitor with Flower." },
              { day: "Day 20-21", focus: "Docker Orchestration", goal: "Multi-container setup: Django, Celery workers, Redis, PostgreSQL. One docker-compose up and everything works." }
            ],
            outcomes: ["Production-ready authentication", "Handle 1000s of background jobs", "Portable development environment"]
          }
        ],
        resources: [
          "Django Official Docs (ORM section - read 3x)",
          "DRF Official Tutorial (complete all 6 parts)",
          "Two Scoops of Django (chapters 6, 7, 11)",
          "Celery Official Docs (First Steps + User Guide)"
        ],
        proof: "GitHub repo with 20+ commits, Docker working, tests passing, deployed to staging"
      }
    },
    {
      id: 1,
      title: "STRIPE PAYMENTS",
      status: "next",
      duration: "2 WEEKS",
      demand: "#1 CLIENT DEMAND",
      color: "from-violet-500 to-purple-600",
      icon: DollarSign,
      skills: [
        "dj-stripe Subscriptions + Webhooks + Checkout",
        "Trial→Active→PastDue→Cancel lifecycle",
        "Failed payment recovery",
        "DELIVER: SaaS Billing Dashboard",
        "PROOF: GitHub + Stripe test cards demo"
      ],
      impact: "Unlock $500-1200 Project Potential",
      roadmap: {
        description: "This is THE skill that clients pay premium for. SaaS businesses need subscription billing. Master this and you're immediately worth $60-70/hr.",
        milestones: [
          {
            week: "Week 1: Stripe Foundation",
            title: "Payments Core",
            learningPath: [
              { day: "Day 1-2", focus: "Stripe Setup & dj-stripe", goal: "Install dj-stripe, sync models, understand Product/Price/Customer architecture. Create your first test charge." },
              { day: "Day 3-4", focus: "Checkout Session", goal: "Build Stripe Checkout flow. Redirect user → payment → success/cancel. Handle session_id verification." },
              { day: "Day 5-7", focus: "Webhook Mastery", goal: "Implement webhook endpoint, verify signatures, handle checkout.session.completed. Understand idempotency." }
            ],
            outcomes: ["Can charge customers successfully", "Webhook endpoint secured", "Understand Stripe dashboard"]
          },
          {
            week: "Week 2: Subscriptions Lifecycle",
            title: "SaaS Billing Complete",
            learningPath: [
              { day: "Day 8-9", focus: "Subscription Creation", goal: "Free trial → paid subscription flow. Link Stripe Subscription to Django User. Create pricing tiers." },
              { day: "Day 10-11", focus: "Lifecycle Events", goal: "Handle: trial_end, payment_succeeded, payment_failed, subscription_updated, subscription_deleted webhooks." },
              { day: "Day 12-13", focus: "Failed Payment Recovery", goal: "Dunning emails, retry logic, grace periods. Update subscription status in real-time." },
              { day: "Day 14", focus: "Billing Dashboard", goal: "Build customer portal: view subscription, change plan, update payment method, cancel subscription, invoice history." }
            ],
            outcomes: ["Complete subscription lifecycle working", "Failed payments handled gracefully", "Professional billing dashboard"]
          }
        ],
        realWorldScenarios: [
          "User signs up → 7-day trial → auto-converts to paid",
          "Payment fails → send email → retry 3 times → downgrade to free",
          "User upgrades plan → prorated charge → immediate access",
          "User cancels → keep access until period end → send survey"
        ],
        resources: [
          "Stripe Official Docs (Billing section - complete)",
          "dj-stripe documentation (read entirely)",
          "Stripe Checkout Best Practices",
          "SaaS Billing Patterns (research 5 popular SaaS)"
        ],
        proof: "GitHub repo + Loom video: complete signup → trial → paid → upgrade → cancel flow with test cards",
        clientValue: "This alone can land $1,200 projects. Every SaaS needs this. You'll build it 10+ times in your career."
      }
    },
    {
      id: 2,
      title: "TESTING MASTERY",
      status: "upcoming",
      duration: "1-2 WEEKS",
      color: "from-blue-500 to-cyan-600",
      icon: Target,
      skills: [
        "pytest-django + Factory Boy + 90% coverage",
        "API + Celery task + Webhook tests",
        "Mock Stripe/Celery calls",
        "DELIVER: pytest --cov-fail-under=90 + CI badge"
      ],
      impact: "Professional Quality Badge - Client Trust",
      roadmap: {
        description: "This is what separates $30/hr developers from $70/hr professionals. Clients see 90% test coverage and know you're serious.",
        milestones: [
          {
            week: "Week 1: Testing Foundation",
            title: "pytest Mastery",
            learningPath: [
              { day: "Day 1-3", focus: "pytest-django Setup", goal: "Configure pytest, write first model tests, understand fixtures vs factories. Test User model CRUD." },
              { day: "Day 4-6", focus: "Factory Boy Mastery", goal: "Create factories for all models. Understand SubFactory, Faker, post_generation. Build realistic test data." },
              { day: "Day 7-9", focus: "API Testing", goal: "Test all DRF endpoints: GET, POST, PUT, DELETE. Test permissions, authentication, nested serializers." }
            ],
            outcomes: ["All models have test coverage", "Factory for every model", "All API endpoints tested"]
          },
          {
            week: "Week 2: Advanced Testing",
            title: "Mocking & Coverage",
            learningPath: [
              { day: "Day 10-11", focus: "Celery Task Testing", goal: "Mock Celery tasks, test task logic, test retry behavior. Use eager mode for fast tests." },
              { day: "Day 12-13", focus: "Webhook Testing", goal: "Mock Stripe webhook signatures, test all webhook handlers, verify idempotency." },
              { day: "Day 14", focus: "90% Coverage Goal", goal: "Run coverage report, identify gaps, add missing tests. Configure pytest-cov. Add CI badge to README." }
            ],
            outcomes: ["Celery tasks fully tested", "All webhooks tested", "90%+ coverage achieved"]
          }
        ],
        testingPhilosophy: [
          "Test behavior, not implementation",
          "Arrange-Act-Assert pattern always",
          "One assertion per test (mostly)",
          "Fast tests = tests that get run"
        ],
        resources: [
          "pytest Official Docs (read 2x)",
          "Factory Boy Docs (master SubFactory)",
          "pytest-django Best Practices",
          "Test-Driven Development book (Kent Beck)"
        ],
        proof: "GitHub with pytest.ini, 90%+ coverage badge, CI passing, tests run in <30 seconds",
        clientValue: "High test coverage = fewer bugs = happy clients = referrals. Plus you can refactor fearlessly."
      }
    },
    {
      id: 3,
      title: "WEBSOCKETS",
      status: "upcoming",
      duration: "1 WEEK",
      color: "from-orange-500 to-red-600",
      icon: Zap,
      skills: [
        "Django Channels + Redis Layer",
        "JWT WebSocket auth",
        "Celery→WS real-time bridge",
        "DELIVER: Live payment notifications"
      ],
      impact: "Real-time Features = Premium Pricing",
      roadmap: {
        description: "Real-time is magic to clients. Chat, notifications, live updates - this opens doors to premium projects. Think $1,500-2,500 range.",
        milestones: [
          {
            week: "Week 1: Real-time Mastery",
            title: "WebSocket Complete",
            learningPath: [
              { day: "Day 1-2", focus: "Channels Setup", goal: "Install Channels, configure ASGI, create first consumer. Understand sync vs async consumers." },
              { day: "Day 3-4", focus: "Redis Channel Layer", goal: "Configure Redis backend, understand groups/channels, implement chat room architecture." },
              { day: "Day 5", focus: "JWT WebSocket Auth", goal: "Authenticate WebSocket connections with JWT, handle token refresh, disconnect on invalid token." },
              { day: "Day 6-7", focus: "Celery→WS Bridge", goal: "Send task results to WebSocket. Example: payment processed → notify user in real-time." }
            ],
            outcomes: ["WebSocket chat working", "Authenticated connections", "Celery tasks push to frontend"]
          }
        ],
        realWorldExamples: [
          "Payment processed → instant notification to dashboard",
          "Order placed → kitchen display updates immediately",
          "New message → recipient sees it without refresh",
          "Report generated → download link appears live"
        ],
        resources: [
          "Django Channels Official Tutorial (complete)",
          "Channels Deployment Guide (read 3x)",
          "WebSocket Best Practices (research)",
          "Redis Pub/Sub patterns (understand deeply)"
        ],
        proof: "Live demo: open 2 browser windows, send message in one, appears in other instantly. Show Celery task → WS notification.",
        clientValue: "Every real-time feature is premium. Chat apps, live dashboards, notifications - clients expect to pay more for these."
      }
    },
    {
      id: 4,
      title: "DB OPTIMIZATION",
      status: "upcoming",
      duration: "1 WEEK",
      color: "from-pink-500 to-rose-600",
      icon: TrendingUp,
      skills: [
        "select_related/prefetch_related mastery",
        "Query annotations + Raw SQL when needed",
        "Database indexing strategy",
        "N+1 elimination (0 tolerance)",
        "PROOF: Before/after query screenshots"
      ],
      impact: "10x Performance = Elite Developer Status",
      roadmap: {
        description: "Performance is the silent skill that gets you hired again and again. When your API responds in 50ms while others take 2 seconds, clients notice.",
        milestones: [
          {
            week: "Week 1: Performance Mastery",
            title: "Query Optimization",
            learningPath: [
              { day: "Day 1-2", focus: "N+1 Detection", goal: "Install django-debug-toolbar, identify every N+1 query. Use select_related for ForeignKey, prefetch_related for Many relationships." },
              { day: "Day 3-4", focus: "Annotation Mastery", goal: "Use annotate() for counts, sums, averages. Build a dashboard with aggregated data - zero extra queries." },
              { day: "Day 5-6", focus: "Database Indexing", goal: "Understand when to index: foreign keys, frequently filtered fields, ordering. Use db_index, Index(), and constraints." },
              { day: "Day 7", focus: "Raw SQL Strategy", goal: "Know when ORM isn't enough. Write complex reports in raw SQL. Use .raw() and .extra() wisely." }
            ],
            outcomes: ["Zero N+1 queries in codebase", "All APIs under 100ms", "Proper indexes on all tables"]
          }
        ],
        optimizationChecklist: [
          "Every list view uses select_related or prefetch_related",
          "Pagination on all lists (never load 1000+ items)",
          "Database indexes on foreign keys and filter fields",
          "Use only() and defer() to limit selected fields",
          "Count queries use .count() not len()"
        ],
        resources: [
          "Django ORM Cookbook (read optimization chapter 5x)",
          "High Performance Django (book - chapters 3-5)",
          "PostgreSQL EXPLAIN Basics (master this)",
          "Database Indexing Strategy Guide"
        ],
        proof: "Screenshots: before (2000ms, 50 queries) → after (80ms, 3 queries). Lighthouse score 95+.",
        clientValue: "Fast apps = happy users = successful clients = they pay you more and refer you to others."
      }
    },
    {
      id: 5,
      title: "REDIS ADVANCED",
      status: "upcoming",
      duration: "3 DAYS",
      color: "from-red-500 to-orange-600",
      icon: Rocket,
      skills: [
        "Cache invalidation (THE hard part)",
        "Per-view + Low-level cache patterns",
        "Redis as Celery broker + Session store",
        "DELIVER: 10x API speed improvement"
      ],
      impact: "Speed Mastery = Client Wow Factor",
      roadmap: {
        description: "There are only two hard things in Computer Science: cache invalidation and naming things. Master the first one here.",
        milestones: [
          {
            week: "3 Days Sprint",
            title: "Caching Mastery",
            learningPath: [
              { day: "Day 1", focus: "Cache Fundamentals", goal: "Understand cache levels: database query, template fragment, per-view, low-level. Implement view-level caching." },
              { day: "Day 2", focus: "Cache Invalidation", goal: "The hard part. Use signals to invalidate on model save/delete. Implement cache versioning. Handle cache stampede." },
              { day: "Day 3", focus: "Redis Multi-purpose", goal: "Use Redis for: cache, Celery broker, session storage, rate limiting. One Redis, many use cases." }
            ],
            outcomes: ["API responses cached properly", "Cache invalidates on data change", "Redis handles 3+ use cases"]
          }
        ],
        cachingStrategy: [
          "Cache expensive queries (10+ table joins)",
          "Cache API responses that don't change often",
          "Cache template fragments for logged-out users",
          "Never cache user-specific data at view level",
          "Use cache versioning for safe deploys"
        ],
        resources: [
          "Django Caching Framework Docs (read 3x)",
          "Redis University (free course)",
          "Scaling Django with Redis (article series)",
          "Cache Invalidation Patterns (research deeply)"
        ],
        proof: "Before/after benchmarks: API response time 1200ms → 60ms. Show redis-cli monitoring during load test.",
        clientValue: "Instant APIs = premium UX. Clients will show your app to investors and it feels magical. That's worth $$."
      }
    },
    {
      id: 6,
      title: "SENTRY MONITORING",
      status: "upcoming",
      duration: "2 DAYS",
      color: "from-amber-500 to-yellow-600",
      icon: Award,
      skills: [
        "Django + Celery + Release monitoring",
        "Performance tracing + Error grouping",
        "Slack/Email alerts",
        "PROOF: Production-ready monitoring"
      ],
      impact: "Production Confidence = Recurring Clients",
      roadmap: {
        description: "The difference between amateur and professional: professionals know when things break, before the client does.",
        milestones: [
          {
            week: "2 Days Setup",
            title: "Production Monitoring",
            learningPath: [
              { day: "Day 1", focus: "Sentry Integration", goal: "Install sentry-sdk, configure Django + Celery integration, set up error tracking, test with intentional error." },
              { day: "Day 2", focus: "Advanced Monitoring", goal: "Enable performance monitoring, set up release tracking, configure Slack alerts, customize error fingerprinting." }
            ],
            outcomes: ["All errors tracked automatically", "Performance issues detected", "Slack alerts on critical errors"]
          }
        ],
        monitoringChecklist: [
          "Sentry catches all unhandled exceptions",
          "Celery task failures reported to Sentry",
          "Performance transactions tracked (slow endpoints)",
          "Releases tagged with git SHA",
          "Critical errors alert to Slack immediately"
        ],
        resources: [
          "Sentry Django Documentation (complete)",
          "Sentry Best Practices Guide",
          "Error Tracking Strategy (research)",
          "Production Monitoring Patterns"
        ],
        proof: "Sentry dashboard screenshot showing: error grouping, performance graph, release tracking, alert configuration.",
        clientValue: "Fix bugs before clients report them = professional reputation = $70/hr rates = repeat business."
      }
    },
    {
      id: 7,
      title: "GRAPHQL",
      status: "upcoming",
      duration: "1 WEEK",
      color: "from-fuchsia-500 to-pink-600",
      icon: Code,
      skills: [
        "Graphene-Django + REST hybrid",
        "Schema stitching + Subscriptions",
        "DELIVER: GraphQL playground demo"
      ],
      impact: "Modern API Skills = International Clients",
      roadmap: {
        description: "REST is everywhere, but GraphQL is where premium projects are. Especially international clients from US/Europe love GraphQL.",
        milestones: [
          {
            week: "Week 1: GraphQL Mastery",
            title: "Modern APIs",
            learningPath: [
              { day: "Day 1-2", focus: "Graphene Setup", goal: "Install Graphene-Django, create first schema, understand Query and Mutation. Build basic CRUD in GraphQL." },
              { day: "Day 3-4", focus: "Advanced Queries", goal: "Implement filtering, pagination, nested relationships. Optimize with dataloaders to avoid N+1." },
              { day: "Day 5-6", focus: "Mutations & Auth", goal: "Create mutations for all CRUD, implement JWT authentication, handle errors properly." },
              { day: "Day 7", focus: "GraphQL Subscriptions", goal: "Add real-time subscriptions using Channels. Example: subscribe to new orders, get push updates." }
            ],
            outcomes: ["Complete GraphQL API alongside REST", "N+1 queries solved with dataloaders", "Real-time subscriptions working"]
          }
        ],
        graphqlPatterns: [
          "Use GraphQL for complex, nested data fetching",
          "Keep REST for simple CRUD and file uploads",
          "Implement pagination on all list queries",
          "Use dataloaders to batch database queries",
          "Provide GraphQL Playground in development"
        ],
        resources: [
          "Graphene-Django Official Tutorial (complete)",
          "GraphQL Best Practices (official guide)",
          "Dataloader Pattern (understand deeply)",
          "GraphQL vs REST (know when to use each)"
        ],
        proof: "GraphQL Playground screenshot: complex nested query, mutations working, subscription demo video.",
        clientValue: "International clients from US/EU often prefer GraphQL. This skill alone can get you $60-80/hr remote contracts."
      }
    }
  ];

  const packages = [
    { name: "BASIC", price: "$500", features: "API + Docker + Tests", color: "bg-gradient-to-br from-blue-500 to-cyan-500" },
    { name: "PRO", price: "$1,200", features: "+ Stripe + Celery + Redis", color: "bg-gradient-to-br from-violet-500 to-fuchsia-500" },
    { name: "ELITE", price: "$2,500", features: "Full Capstone Stack", color: "bg-gradient-to-br from-orange-500 to-pink-500" }
  ];

  // Detailed Phase View Component
  const PhaseDetailView = ({ phase, onClose }) => {
    const Icon = phase.icon;
    
    return (
      <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto">
        <div className="min-h-screen px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
              >
                <ArrowLeft size={20} />
                <span>Back to Roadmap</span>
              </button>
              
              <div className={`inline-flex items-center gap-4 bg-gradient-to-r ${phase.color} p-1 rounded-2xl mb-6`}>
                <div className="bg-black px-8 py-4 rounded-xl flex items-center gap-4">
                  <Icon size={48} className="text-white" />
                  <div>
                    <h1 className="text-4xl md:text-5xl font-black text-white">{phase.title}</h1>
                    <p className="text-xl text-gray-300 mt-2">{phase.duration}</p>
                  </div>
                </div>
              </div>

              <p className="text-2xl text-gray-300 leading-relaxed mb-6">
                {phase.roadmap.description}
              </p>

              <div className={`inline-block px-6 py-3 bg-gradient-to-r ${phase.color} rounded-xl text-white text-xl font-bold`}>
                {phase.impact}
              </div>
            </div>

            {/* Milestones */}
            <div className="space-y-12">
              {phase.roadmap.milestones.map((milestone, idx) => (
                <div key={idx} className={`bg-gradient-to-r ${phase.color} p-1 rounded-2xl`}>
                  <div className="bg-gray-900 rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br ${phase.color} rounded-xl text-white font-black text-xl">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-bold tracking-wider uppercase">{milestone.week}</div>
                        <h3 className="text-3xl font-black text-white">{milestone.title}</h3>
                      </div>
                    </div>

                    {/* Learning Path */}
                    <div className="space-y-4 mb-6">
                      {milestone.learningPath.map((path, pathIdx) => (
                        <div key={pathIdx} className="bg-gray-800/50 rounded-xl p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <Calendar className="text-violet-400" size={24} />
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="px-3 py-1 bg-gray-700 rounded-lg text-sm font-bold text-white">
                                  {path.day}
                                </span>
                                <span className="text-xl font-bold text-white">{path.focus}</span>
                              </div>
                              <p className="text-gray-300 leading-relaxed">{path.goal}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Outcomes */}
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Trophy className="text-green-400" size={24} />
                        <h4 className="text-xl font-bold text-white">Success Outcomes</h4>
                      </div>
                      <ul className="space-y-2">
                        {milestone.outcomes.map((outcome, outIdx) => (
                          <li key={outIdx} className="flex items-start gap-3">
                            <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                            <span className="text-gray-300">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Real World Scenarios (if available) */}
            {phase.roadmap.realWorldScenarios && (
              <div className="mt-12 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="text-blue-400" size={28} />
                  <h3 className="text-2xl font-bold text-white">Real-World Scenarios</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {phase.roadmap.realWorldScenarios.map((scenario, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-xl p-4 flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-gray-300">{scenario}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Sections */}
            {phase.roadmap.testingPhilosophy && (
              <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="text-purple-400" size={28} />
                  <h3 className="text-2xl font-bold text-white">Testing Philosophy</h3>
                </div>
                <ul className="space-y-3">
                  {phase.roadmap.testingPhilosophy.map((principle, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-purple-400 font-bold">→</span>
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {phase.roadmap.realWorldExamples && (
              <div className="mt-12 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="text-orange-400" size={28} />
                  <h3 className="text-2xl font-bold text-white">Real-World Examples</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {phase.roadmap.realWorldExamples.map((example, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-xl p-4 text-gray-300">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {phase.roadmap.optimizationChecklist && (
              <div className="mt-12 bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="text-pink-400" size={28} />
                  <h3 className="text-2xl font-bold text-white">Optimization Checklist</h3>
                </div>
                <ul className="space-y-3">
                  {phase.roadmap.optimizationChecklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-pink-400 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {phase.roadmap.cachingStrategy && (
              <div className="mt-12 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="text-red-400" size={28} />
                  <h3 className="text-2xl font-bold text-white">Caching Strategy</h3>
                </div>
                <ul className="space-y-3">
                  {phase.roadmap.cachingStrategy.map((strategy, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-red-400 font-bold">▸</span>
                      <span>{strategy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {phase.roadmap.monitoringChecklist && (
              <div className="mt-12 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="text-yellow-400" size={28} />
                  <h3 className="text-2xl font-bold text-white">Monitoring Checklist</h3>
                </div>
                <ul className="space-y-3">
                  {phase.roadmap.monitoringChecklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {phase.roadmap.graphqlPatterns && (
              <div className="mt-12 bg-gradient-to-r from-fuchsia-500/10 to-pink-500/10 border border-fuchsia-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="text-fuchsia-400" size={28} />
                  <h3 className="text-2xl font-bold text-white">GraphQL Patterns</h3>
                </div>
                <ul className="space-y-3">
                  {phase.roadmap.graphqlPatterns.map((pattern, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-fuchsia-400 font-bold">◆</span>
                      <span>{pattern}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Resources */}
            <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-bold text-white">Essential Resources</h3>
              </div>
              <ul className="space-y-3">
                {phase.roadmap.resources.map((resource, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 font-bold">📚</span>
                    <span>{resource}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Proof of Mastery */}
            <div className="mt-12 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="text-green-400" size={28} />
                <h3 className="text-2xl font-bold text-white">Proof of Mastery</h3>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">{phase.roadmap.proof}</p>
            </div>

            {/* Client Value */}
            {phase.roadmap.clientValue && (
              <div className={`mt-12 bg-gradient-to-r ${phase.color} p-1 rounded-2xl`}>
                <div className="bg-gray-900 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <DollarSign className="text-white" size={32} />
                    <h3 className="text-3xl font-bold text-white">Why This Makes You Money</h3>
                  </div>
                  <p className="text-2xl text-gray-200 leading-relaxed font-medium">
                    {phase.roadmap.clientValue}
                  </p>
                </div>
              </div>
            )}

            {/* Back Button */}
            <div className="mt-12 text-center">
              <button
                onClick={onClose}
                className={`px-12 py-4 bg-gradient-to-r ${phase.color} text-white font-bold text-xl rounded-2xl hover:scale-105 transition-transform`}
              >
                Back to Full Roadmap
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Show detailed view if phase is selected
  if (selectedPhase !== null) {
    const phase = phases.find(p => p.id === selectedPhase);
    return <PhaseDetailView phase={phase} onClose={() => setSelectedPhase(null)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse"
                style={{
                  width: `${Math.random() * 300 + 100}px`,
                  height: `${Math.random() * 300 + 100}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle, ${
                    ['#8b5cf6', '#ec4899', '#f59e0b', '#06b6d4'][Math.floor(Math.random() * 4)]
                  } 0%, transparent 70%)`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 5 + 3}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 max-w-6xl mx-auto px-6 text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full border border-violet-500/30 backdrop-blur-sm">
            <span className="text-violet-300 font-bold text-sm tracking-wider">YOUR TRANSFORMATION BEGINS NOW</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400 animate-gradient">
              DJANGO
            </span>
            <br />
            <span className="text-white">MASTERY</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            From Developer to <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">$40-70/hr</span> Freelancer in 9 Weeks
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <div className="flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm px-8 py-4 rounded-2xl border border-gray-800">
              <Globe className="text-violet-400" size={32} />
              <div className="text-left">
                <div className="text-sm text-gray-400">Target Rate</div>
                <div className="text-2xl font-bold text-white">$40-70/hr</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm px-8 py-4 rounded-2xl border border-gray-800">
              <Rocket className="text-fuchsia-400" size={32} />
              <div className="text-left">
                <div className="text-sm text-gray-400">Timeline</div>
                <div className="text-2xl font-bold text-white">9 Weeks</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm px-8 py-4 rounded-2xl border border-gray-800">
              <Award className="text-orange-400" size={32} />
              <div className="text-left">
                <div className="text-sm text-gray-400">Status</div>
                <div className="text-2xl font-bold text-white">Elite Ready</div>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-500 uppercase tracking-widest">Scroll to visualize your journey</div>
        </div>
      </div>

      {/* Phases Section */}
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              YOUR ROADMAP
            </span>
          </h2>

          <div className="space-y-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isActive = activePhase === phase.id;
              
              return (
                <div
                  key={phase.id}
                  className={`group relative transition-all duration-500 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setActivePhase(phase.id)}
                  onMouseLeave={() => setActivePhase(null)}
                >
                  <div className={`relative bg-gradient-to-r ${phase.color} p-1 rounded-2xl transition-all duration-300 ${isActive ? 'scale-105 shadow-2xl' : 'scale-100'}`}>
                    <div className="bg-gray-900 rounded-2xl p-8">
                      <div className="flex items-start gap-6">
                        <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${phase.color} rounded-xl flex items-center justify-center transition-transform duration-300 ${isActive ? 'scale-110 rotate-6' : ''}`}>
                          <Icon size={32} className="text-white" />
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex items-center gap-4 mb-4">
                            <h3 className="text-3xl font-black text-white">{phase.title}</h3>
                            <span className="px-4 py-1 bg-gray-800 rounded-full text-sm font-bold text-gray-300">
                              {phase.duration}
                            </span>
                            {phase.demand && (
                              <span className="px-4 py-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-sm font-bold text-white">
                                {phase.demand}
                              </span>
                            )}
                          </div>

                          <div className="grid md:grid-cols-2 gap-3 mb-4">
                            {phase.skills.map((skill, i) => (
                              <div
                                key={i}
                                className={`flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg transition-all duration-300 ${isActive ? 'bg-gray-800' : ''}`}
                              >
                                {phase.status === 'complete' ? (
                                  <CheckCircle size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                                ) : (
                                  <Circle size={20} className="text-gray-600 flex-shrink-0 mt-0.5" />
                                )}
                                <span className="text-gray-300 text-sm leading-relaxed">{skill}</span>
                              </div>
                            ))}
                          </div>

                          <div className={`inline-block px-6 py-3 bg-gradient-to-r ${phase.color} rounded-lg font-bold text-white text-lg`}>
                            {phase.impact}
                          </div>

                          <button
                            onClick={() => setSelectedPhase(phase.id)}
                            className={`mt-4 ml-4 px-6 py-3 bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-gray-600 rounded-lg font-bold text-white text-lg transition-all duration-300 inline-flex items-center gap-2`}
                          >
                            <BookOpen size={20} />
                            View Mastery Roadmap
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Capstone Project */}
      <div className="relative py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full border border-orange-500/30">
              <span className="text-orange-300 font-bold text-sm tracking-wider">WEEK 9 - FINAL MILESTONE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-fuchsia-400">
              CAPSTONE PROJECT
            </h2>
            <p className="text-xl text-gray-400">Complete SaaS Backend Platform</p>
          </div>

          <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-fuchsia-500 p-1 rounded-2xl">
            <div className="bg-gray-900 rounded-2xl p-10">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Django DRF + JWT Auth",
                  "Stripe Subscriptions + Webhooks",
                  "Celery Async Jobs",
                  "Redis Cache + Broker",
                  "WebSocket Notifications",
                  "PostgreSQL (Optimized)",
                  "90%+ Test Coverage",
                  "Sentry Monitoring",
                  "Docker Multi-Service",
                  "Render.com Production Deploy"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={24} />
                    <span className="text-white font-medium text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Packages */}
      <div className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center text-white">
            YOUR PACKAGES
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">Transform Skills into Revenue</p>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`group relative transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`${pkg.color} p-1 rounded-2xl transition-transform duration-300 group-hover:scale-105`}>
                  <div className="bg-gray-900 rounded-2xl p-8 h-full">
                    <div className="text-center">
                      <div className="text-gray-400 font-bold mb-2 tracking-wider">{pkg.name}</div>
                      <div className="text-5xl font-black mb-4 text-white">{pkg.price}</div>
                      <div className="text-lg text-gray-300 mb-8">{pkg.features}</div>
                      <div className={`${pkg.color} text-white font-bold py-4 px-6 rounded-xl transition-transform duration-300 group-hover:scale-110`}>
                        Available Soon
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Positioning */}
      <div className="relative py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">
              YOUR MARKET POSITION
            </span>
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-1 rounded-2xl">
              <div className="bg-gray-900 rounded-2xl p-8">
                <div className="text-sm text-cyan-400 font-bold mb-2">LinkedIn</div>
                <div className="text-2xl text-white font-bold">
                  "Django Backend Specialist | Stripe + WebSockets + 90% Tests"
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-1 rounded-2xl">
              <div className="bg-gray-900 rounded-2xl p-8">
                <div className="text-sm text-fuchsia-400 font-bold mb-2">Upwork Title</div>
                <div className="text-2xl text-white font-bold">
                  "Full Django SaaS Backend | Payments + Real-time + Production Ready"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Affirmation */}
      <div className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
              9 WEEKS
            </div>
            <div className="text-3xl text-gray-300 font-light mb-4">From Now to Freelance Ready</div>
            <div className="text-5xl md:text-6xl font-black text-white mb-8">
              100% ACHIEVABLE
            </div>
          </div>

          <div className="space-y-6 text-2xl text-gray-400 mb-12">
            <p className="leading-relaxed">
              Every Nepali frontend freelancer becomes <span className="text-white font-bold">your client pipeline</span>.
            </p>
            <p className="leading-relaxed">
              You are not just learning Django. You are <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 font-bold">becoming an expert</span>.
            </p>
            <p className="leading-relaxed">
              The international market is waiting. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 font-bold">Your time is now</span>.
            </p>
          </div>

          <div className="inline-block bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-500 text-white px-12 py-6 rounded-2xl text-2xl font-black shadow-2xl transform hover:scale-105 transition-transform duration-300">
            I AM READY. I AM CAPABLE. I AM BECOMING.
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700;900&display=swap');
        
        * {
          font-family: 'Space Grotesk', sans-serif;
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}