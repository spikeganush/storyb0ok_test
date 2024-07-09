import React from 'react';
import { TabsWithBorderTopProps } from './type';

export const primaryData: TabsWithBorderTopProps = {
  tabs: [
    {
      title: 'Course rules and maps',
      children: (
        <div>
          <p className="font-semibold text-acu-black-80">
            Course maps provide a visual representation of the course rules and the sequence of
            units.
            <br />
            Course rules are published in the official ACU Handbook and are subject to change.
            <br />
            Any queries regarding the course structure should be directed to your course
            coordinator.
          </p>
          <h3 className="mt-4 text-2xl font-bold text-acu-purple-100">Course maps</h3>
          <h3 className="mb-4 mt-8 text-2xl font-bold text-acu-purple-100">
            Students starting in 2023 or later
          </h3>
          <ul className="list-inside list-disc">
            <li>
              <a href="#" className="mr-1 text-acu-red-100">
                Semester 1 intake course map (one major, two minors)
              </a>
            </li>
            <li>
              <a href="#" className="mr-1 text-acu-red-100">
                Semester 1 intake course map (two majors)
              </a>
            </li>
            <li>
              <a href="#" className="mr-1 text-acu-red-100">
                Semester 2 intake course map (one major, two minors)
              </a>
            </li>
            <li>
              <a href="#" className="mr-1 text-acu-red-100">
                Semester 2 intake course map (two majors)
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Unit offerings',
      children: (
        <div>
          <ul className="mb-8 list-inside list-disc">
            <li>
              <a href="#" className="mr-1 text-acu-red-100">
                Arts unit list
              </a>
              PDF
            </li>
            <li>
              <a href="#" className="mr-1 text-acu-red-100">
                ACU Core Curriculum
              </a>
            </li>
            <li>
              <a href="#" className="mr-1 text-acu-red-100">
                Study in Rome in 2024!
              </a>
            </li>
          </ul>
          <p className="mb-4 font-semibold text-acu-charcoal-100">
            Please note that study modes and unit availability are subject to change and not all
            units are on offer at all times. Units might be offered in different modes (on-campus,
            multi-mode, online scheduled or online unscheduled). If you are unsure which mode is the
            most suitable for you, please contact your course coordinator prior to enrolling.
          </p>
          <p className="font-semibold text-acu-charcoal-100">
            Minimum enrolment numbers apply to all units. The University reserves the right to
            cancel units with low enrolment numbers. Students will be advised of cancellations prior
            to the start of semester and offered an alternative unit if one is available. You must
            enrol for the whole academic year if you commence in Semester 1 or if you are
            re-enrolling. You can change your enrolment up until the census date for each semester
            or professional term. See the Academic Calendar for key dates.
          </p>
        </div>
      ),
    },
    {
      title: 'Course information',
      children: (
        <div>
          <ul className="mb-8 list-inside list-disc">
            <li>
              <a href="#" className="mr-1 text-acu-red-100">
                Frequently Asked Questions (FAQs) for the Bachelor of Arts
              </a>
              PDF
            </li>
            <li>
              <a href="#" className="mr-1 text-acu-red-100">
                ACU Core Curriculum
              </a>
            </li>
          </ul>
          <ul className="mb-8 list-inside list-disc">
            <li>
              <a href="#" className="mr-1 text-acu-red-100">
                Becoming a classroom teacher
              </a>
              (through postgraduate study) (PDF)
            </li>
            <li>
              <a href="#" className="mr-1 text-acu-red-100">
                Information about studying history in NSW
              </a>
              (for teaching) (PDF)
            </li>
          </ul>
        </div>
      ),
    },
  ],
};
