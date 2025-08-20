import Image from 'next/image';
import AnchorButton from '../global/AnchorButton';

const Project = () => {
  return (
    <section className='bg-zinc-200'>
      <div className='max-w-screen-xl mx-auto p-8 md:flex md:gap-8'>
        <div className='mb-8 md:flex-1'>
          <h2 className='text-[32px] leading-8'>
            Project Nanhi Kali:{' '}
            <span className='font-bold'>EMPOWERING GIRLS ACROSS INDIA</span>
          </h2>

          <div className='pt-4 flex flex-col gap-10 md:gap-2 md:flex-row'>
            <div className='flex flex-col gap-5 md:flex-1'>
              <h3 className='font-bold leading-5'>
                Find out who we are and
                <br /> what we do for the girl child
              </h3>
              <p className='leading-5'>
                Project Nanhi Kali was founded in 1996 at K.C. Mahindra
                Education Trust by Anand Mahindra with the vision of creating a
                world where girls, despite the patriarchal challenges and
                societal biases they face, are empowered through education.{' '}
              </p>
            </div>

            <div className='flex flex-col gap-5 md:flex-1'>
              <h3 className='font-bold leading-5'>
                Change and Continuity: Extended Support, Enhanced Empowerment{' '}
              </h3>
              <p className='leading-5'>
                Starting from the academic year 2024-25, Project Nanhi Kali
                embarks on a new journey of empowering girls from lower income
                strata by supporting them through Grades 6 to 10 with targeted
                educational initiatives. In alignment with National Education
                Policy 2020, the educational support provides 21st century
                skills training, making the transition from school to the
                workplace more seamless. The skills include financial and
                digital literacy as well as life skills. The program also
                integrates physical education to cultivate leadership, teamwork
                and fitness.
              </p>
            </div>
          </div>
          <div className='mt-10 w-fit'>
            <AnchorButton content='READ MORE' />
          </div>
        </div>
        <Image
          src='/project.jpg'
          alt='project'
          width={470}
          height={313}
          className='mx-auto md:pl-8'
          style={{
            width: '50%',
            alignSelf: 'flex-start',
          }}
        />
      </div>
    </section>
  );
};

export default Project;
