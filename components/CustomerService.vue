<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
      <!-- First Grid with Background Image -->
      <div class="bg-cover bg-center h-64 md:h-auto md:min-h-screen md:flex items-center justify-center">
        <!-- Add your background image -->
        <img src="@/assets/testimonial-img.png" alt="Background Image" class="h-full w-full object-cover" />
      </div>
    
      <!-- Second Grid for Testimonials -->
      <div class="bg-slate-100">
        <h2 class="text-3xl font-semibold mb-4 p-4 md:p-8">What Our customers Have to Say</h2>
        <ul>
          <li v-for="testimonial in sortedTestimonials" :key="testimonial.timestamp" class="mb-6 fix_padding">
             <p class="text-gray-700 italic pt-3">"{{ testimonial.comment }}"</p>
            <div class="inline-flex py-3.5">
            <h3 class="text-lg font-semibold pr-1.5 uppercase">- {{ testimonial.name }}</h3>
            <p class="text-gray-500 text-lg">{{ formatDate(testimonial.timestamp) }}</p></div>
          </li>
        </ul>
      </div>
    </div>
      </template>
      
      <script>
      export default {
        data() {
          return {
            testimonials: [
              {
                name: "Vesela Vito",
                comment:
                  "This is my second time cruising with Avoya Travel’s help, and I am extremely satisfied with the price and everything else. Both trips went smooth and nice with no hassles, so I would definitely recommend vacationing with that company.",
                timestamp: 1670832000000,
              },
              {
                name: "Patricia Harry",
                comment: "Had a wonderful time. Everything Avoya promised was right on the money. Love every minute of it!",
                timestamp: 1641456000000,
              },
              {
                name: "Ann Moody",
                comment: "I have used Avoya for several years and have always found them to give good service.",
                timestamp: 1677312000000,
              },
              {
                name: "Ignacio Donatello",
                comment: "Avoya Travel always finds a very low price for a cruise.",
                timestamp: 1682751600000,
              },
              {
                name: "John Smith",
                comment: "Best ever! I have said that before but Avoya seems to always go one step better.",
                timestamp: 1692255600000,
              },
            ],
          };
        },
        computed: {
          sortedTestimonials() {
            return [...this.testimonials].sort((a, b) => a.timestamp - b.timestamp);
          },
        },
        methods: {
          formatDate(timestamp) {
            const date = new Date(timestamp);
            return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${(date.getDate()).toString().padStart(2, '0')}/${(date.getFullYear() % 100).toString().padStart(2, '0')}`;
          },
        },
      };
      </script>
       <style scoped>
    
      .fix_padding{
        padding: 0rem 2rem;
      }
      li:nth-child(even){
        background-color:#e2e7ed;
      }
      @media screen and (min-width: 768px) {
        .fix_padding{
          padding: 0rem 6rem 0rem 2rem;
      }
    }
      </style>