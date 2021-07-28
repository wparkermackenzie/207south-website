import React from 'react';

function Page_ProjectWorkingWithPosixThreads()
{

  return(
    <>
    <title>Working with Posix Threads</title>
    <article id='abstract'>
      <section className='abstract'>
        <p>
          A method for writing extensible and maintainable multithreaded Linux applications while
          keeping one's sanity.
        </p>
      </section>
      <p className='copyright'>&copy Wm Parker MacKenzie 2018</p>

      <section className='main'>
        <h1 id='introduction'>Introduction</h1>
        <p>
            It is all too easy to just start writing an application and have it 
            get away from you. Without proper planning, each thread added to the 
            application will create runtime efficiency at the cost of maintainability.
            This is especially true as an application is created over a period of time
            and doubly so if there is more than a single developer. In the end
            many of the threads, mutexes, and conditions will be built in 
            slightly different ways for no apparent reason. Eventually what
            started as a simple application, with the best of intentions becomes 
            an unruly and hard to maintain mess which has grown large enough to 
            affect the companies bottom line.

            What is needed is a way to commit to a set of rules describing how the 
            threading resources should be used in the context of benefitting the 
            application. Further, the rules should then be codified in a way which 
            makes the use of the threading library consistent throughout the 
            application. As the application matures, the rules as to how threads 
            interact may need to change; however, this will be done with knowledge 
            and intent. A simple set of codified rules in a single place will make 
            the application more maintainable.

            Libraries, such as the POCO may be leveraged to accomplish these goals; 
            however no external library can capture how you want your application 
            to function and how the threads interact. It is you, the application 
            developer, which needs to define the use of the functionality.

            It need not be complex, nor should it be. What follows are some simple 
            ideas, which if done up front, will pay off in spades later. For those 
            existing products, the following can be used as an improvement and 
            integrated later in the life cycle of a product and migrated to over time.

            The following strategies have been and continue to be refined on carrier 
            grade products as well as my own DIY projects. As an example these strategies 
            have been applied successfully when building carrier grade LoRaWAN gateways. 
            Many of these gateways are expected to run for decades hundreds of feet 
            above the ground, beyond reach of human interaction.
        </p>
        <h2 id='embraceTheTools'>Embrace the tools provided</h2>
        <p>
            <q>I suppose it is tempting, if the only tool you have is a hammer, to
               treat everything as if it were a nail.</q> - Abraham Maslow, 1966, "The Psychology of Science"


        </p>
      </section>
    </article>
    </>
  )
}