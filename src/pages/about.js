import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="The Story of Miss Moppet, by
          Beatrix Potter"
        />
        <h1>About The Story of Miss Moppet</h1>
        <div>
          <p>
            End of the Project Gutenberg EBook of The Story of Miss Moppet, by
            Beatrix Potter This eBook is for the use of anyone anywhere at no
            cost and with almost no restrictions whatsoever. You may copy it,
            give it away or re-use it under the terms of the Project Gutenberg
            License included with this eBook or online at www.gutenberg.net
          </p>

          <h1>About this OlaBook</h1>
          <p>
            {" "}
            Issues you can resolve:
            <ul>
              <li>An audio file with a reading of the story.</li>
              <li>A Norwegian translation.</li>
              <li>
                Go to{" "}
                <a href="https://github.com/olavea/The-Story-of-Miss-Moppet-1">
                  {" "}
                  https://github.com/olavea/The-Story-of-Miss-Moppet-1
                </a>
              </li>
            </ul>
          </p>
          <h1>
            About this OlaBook, Gutenberg, Parrot Ship Books, Beatrix Potter,
            Scott Tolinski and Gatsby
          </h1>

          <p>Jeg øver på Gatsby med å lage barnebøker</p>
          <p>See map of Potters House (Fresh)</p>
          <p>
            <a href="https://www.telegraph.co.uk/books/what-to-read/the-strange-life-of-beatrix-potter--how-rabbits-and-mushrooms-se/">
              {" "}
              The strange life of Beatrix Potter — how rabbits (and mushrooms)
              set her free, by Matthew Dennison 28 JULY 2016 in the Telegraph
            </a>
          </p>
        </div>

        <p>
          <Link to="/"> Go to the front page </Link>
        </p>
        <p>
          <Link to="/2/"> or go back to page two </Link>
        </p>
        <p />

        <p>
          This and all associated files of various formats will be found in:
          <a href="http://www.gutenberg.org/ebooks/14848">
            {" "}
            http://www.gutenberg.org/files/14848/
          </a>
        </p>
        <p>
          Produced by Robert Cicconetti, Melissa Er-Raqabi and the Online
          Distributed Proofreading Team at{" "}
          <a href="http://www.pgdp.net"> http://www.pgdp.net</a> .
        </p>
        <p>
          Creating the works from public domain print editions means that no one
          owns a United States copyright in these works, so the Foundation (and
          you!) can copy and distribute it in the United States without
          permission and without paying copyright royalties. Special rules, set
          forth in the General Terms of Use part of this license, apply to
          copying and distributing Project Gutenberg-tm electronic works to
          protect the PROJECT GUTENBERG-tm concept and trademark. Project
          Gutenberg is a registered trademark, and may not be used if you charge
          for the eBooks, unless you receive specific permission. If you do not
          charge anything for copies of this eBook, complying with the rules is
          very easy. You may use this eBook for nearly any purpose such as
          creation of derivative works, reports, performances and research. They
          may be modified and printed and given away--you may do practically
          ANYTHING with public domain eBooks. Redistribution is subject to the
          trademark license, especially commercial redistribution.
        </p>
        <p>
          THE FULL PROJECT GUTENBERG LICENSE PLEASE READ THIS BEFORE YOU
          DISTRIBUTE OR USE THIS WORK
        </p>
        <p>
          To protect the Project Gutenberg-tm mission of promoting the free
          distribution of electronic works, by using or distributing this work
          (or any other work associated in any way with the phrase "Project
          Gutenberg"), you agree to comply with all the terms of the Full
          Project Gutenberg-tm License (available with this file or online at
          <a href="http://gutenberg.org/license">
            {" "}
            http://gutenberg.org/license
          </a>
          ).
        </p>
        <p>
          Section 1. General Terms of Use and Redistributing Project
          Gutenberg-tm electronic works
        </p>
        <p>
          1.A. By reading or using any part of this Project Gutenberg-tm
          electronic work, you indicate that you have read, understand, agree to
          and accept all the terms of this license and intellectual property
          (trademark/copyright) agreement. If you do not agree to abide by all
          the terms of this agreement, you must cease using and return or
          destroy all copies of Project Gutenberg-tm electronic works in your
          possession. If you paid a fee for obtaining a copy of or access to a
          Project Gutenberg-tm electronic work and you do not agree to be bound
          by the terms of this agreement, you may obtain a refund from the
          person or entity to whom you paid the fee as set forth in paragraph
          1.E.8.
        </p>
        <p>
          1.B. "Project Gutenberg" is a registered trademark. It may only be
          used on or associated in any way with an electronic work by people who
          agree to be bound by the terms of this agreement. There are a few
          things that you can do with most Project Gutenberg-tm electronic works
          even without complying with the full terms of this agreement. See
          paragraph 1.C below. There are a lot of things you can do with Project
          Gutenberg-tm electronic works if you follow the terms of this
          agreement and help preserve free future access to Project Gutenberg-tm
          electronic works. See paragraph 1.E below.
        </p>
        <p>
          1.C. The Project Gutenberg Literary Archive Foundation ("the
          Foundation" or PGLAF), owns a compilation copyright in the collection
          of Project Gutenberg-tm electronic works. Nearly all the individual
          works in the collection are in the public domain in the United States.
          If an individual work is in the public domain in the United States and
          you are located in the United States, we do not claim a right to
          prevent you from copying, distributing, performing, displaying or
          creating derivative works based on the work as long as all references
          to Project Gutenberg are removed. Of course, we hope that you will
          support the Project Gutenberg-tm mission of promoting free access to
          electronic works by freely sharing Project Gutenberg-tm works in
          compliance with the terms of this agreement for keeping the Project
          Gutenberg-tm name associated with the work. You can easily comply with
          the terms of this agreement by keeping this work in the same format
          with its attached full Project Gutenberg-tm License when you share it
          without charge with others.
        </p>
        <p>
          1.D. The copyright laws of the place where you are located also govern
          what you can do with this work. Copyright laws in most countries are
          in a constant state of change. If you are outside the United States,
          check the laws of your country in addition to the terms of this
          agreement before downloading, copying, displaying, performing,
          distributing or creating derivative works based on this work or any
          other Project Gutenberg-tm work. The Foundation makes no
          representations concerning the copyright status of any work in any
          country outside the United States.
        </p>
        <p>1.E. Unless you have removed all references to Project Gutenberg:</p>
        <p>
          1.E.1. The following sentence, with active links to, or other
          immediate access to, the full Project Gutenberg-tm License must appear
          prominently whenever any copy of a Project Gutenberg-tm work (any work
          on which the phrase "Project Gutenberg" appears, or with which the
          phrase "Project Gutenberg" is associated) is accessed, displayed,
          performed, viewed, copied or distributed:
        </p>
        <p>
          This eBook is for the use of anyone anywhere at no cost and with
          almost no restrictions whatsoever. You may copy it, give it away or
          re-use it under the terms of the Project Gutenberg License included
          with this eBook or online at
          <a href="http://www.gutenberg.org"> http://www.gutenberg.org</a>
        </p>
        <p>
          1.E.2. If an individual Project Gutenberg-tm electronic work is
          derived from the public domain (does not contain a notice indicating
          that it is posted with permission of the copyright holder), the work
          can be copied and distributed to anyone in the United States without
          paying any fees or charges. If you are redistributing or providing
          access to a work with the phrase "Project Gutenberg" associated with
          or appearing on the work, you must comply either with the requirements
          of paragraphs 1.E.1 through 1.E.7 or obtain permission for the use of
          the work and the Project Gutenberg-tm trademark as set forth in
          paragraphs 1.E.8 or 1.E.9.
        </p>
        <p>
          1.E.3. If an individual Project Gutenberg-tm electronic work is posted
          with the permission of the copyright holder, your use and distribution
          must comply with both paragraphs 1.E.1 through 1.E.7 and any
          additional terms imposed by the copyright holder. Additional terms
          will be linked to the Project Gutenberg-tm License for all works
          posted with the permission of the copyright holder found at the
          beginning of this work.
        </p>
        <p>
          1.E.4. Do not unlink or detach or remove the full Project Gutenberg-tm
          License terms from this work, or any files containing a part of this
          work or any other work associated with Project Gutenberg-tm.
        </p>
        <p>
          1.E.4. Do not unlink or detach or remove the full Project Gutenberg-tm
          License terms from this work, or any files containing a part of this
          work or any other work associated with Project Gutenberg-tm.
        </p>
        <p>
          1.E.5. Do not copy, display, perform, distribute or redistribute this
          electronic work, or any part of this electronic work, without
          prominently displaying the sentence set forth in paragraph 1.E.1 with
          active links or immediate access to the full terms of the Project
          Gutenberg-tm License.
        </p>
        <p>
          1.E.6. You may convert to and distribute this work in any binary,
          compressed, marked up, nonproprietary or proprietary form, including
          any word processing or hypertext form. However, if you provide access
          to or distribute copies of a Project Gutenberg-tm work in a format
          other than "Plain Vanilla ASCII" or other format used in the official
          version posted on the official Project Gutenberg-tm web site (
          <a href="http://www.gutenberg.org">http://www.gutenberg.org</a>), you
          must, at no additional cost, fee or expense to the user, provide a
          copy, a means of exporting a copy, or a means of obtaining a copy upon
          request, of the work in its original "Plain Vanilla ASCII" or other
          form. Any alternate format must include the full Project Gutenberg-tm
          License as specified in paragraph 1.E.1.
        </p>
        <p>
          1.E.7. Do not charge a fee for access to, viewing, displaying,
          performing, copying or distributing any Project Gutenberg-tm works
          unless you comply with paragraph 1.E.8 or 1.E.9.
        </p>
        <p>
          1.E.8. You may charge a reasonable fee for copies of or providing
          access to or distributing Project Gutenberg-tm electronic works
          provided that
        </p>
        <p>
          - You pay a royalty fee of 20% of the gross profits you derive from
          the use of Project Gutenberg-tm works calculated using the method you
          already use to calculate your applicable taxes. The fee is owed to the
          owner of the Project Gutenberg-tm trademark, but he has agreed to
          donate royalties under this paragraph to the Project Gutenberg
          Literary Archive Foundation. Royalty payments must be paid within 60
          days following each date on which you prepare (or are legally required
          to prepare) your periodic tax returns. Royalty payments should be
          clearly marked as such and sent to the Project Gutenberg Literary
          Archive Foundation at the address specified in Section 4, "Information
          about donations to the Project Gutenberg Literary Archive Foundation."
        </p>
        <p>
          - You provide a full refund of any money paid by a user who notifies
          you in writing (or by e-mail) within 30 days of receipt that s/he does
          not agree to the terms of the full Project Gutenberg-tm License. You
          must require such a user to return or destroy all copies of the works
          possessed in a physical medium and discontinue all use of and all
          access to other copies of Project Gutenberg-tm works.
        </p>
        <p>
          - You provide, in accordance with paragraph 1.F.3, a full refund of
          any money paid for a work or a replacement copy, if a defect in the
          electronic work is discovered and reported to you within 90 days of
          receipt of the work.
        </p>
        <p>
          - You comply with all other terms of this agreement for free
          distribution of Project Gutenberg-tm works.
        </p>
        <p>
          1.E.9. If you wish to charge a fee or distribute a Project
          Gutenberg-tm electronic work or group of works on different terms than
          are set forth in this agreement, you must obtain permission in writing
          from both the Project Gutenberg Literary Archive Foundation and
          Michael Hart, the owner of the Project Gutenberg-tm trademark. Contact
          the Foundation as set forth in Section 3 below.
        </p>
        <p>1.F.</p>
        <p>
          1.F.1. Project Gutenberg volunteers and employees expend considerable
          effort to identify, do copyright research on, transcribe and proofread
          public domain works in creating the Project Gutenberg-tm collection.
          Despite these efforts, Project Gutenberg-tm electronic works, and the
          medium on which they may be stored, may contain "Defects," such as,
          but not limited to, incomplete, inaccurate or corrupt data,
          transcription errors, a copyright or other intellectual property
          infringement, a defective or damaged disk or other medium, a computer
          virus, or computer codes that damage or cannot be read by your
          equipment.
        </p>
        <p>
          1.F.2. LIMITED WARRANTY, DISCLAIMER OF DAMAGES - Except for the "Right
          of Replacement or Refund" described in paragraph 1.F.3, the Project
          Gutenberg Literary Archive Foundation, the owner of the Project
          Gutenberg-tm trademark, and any other party distributing a Project
          Gutenberg-tm electronic work under this agreement, disclaim all
          liability to you for damages, costs and expenses, including legal
          fees. YOU AGREE THAT YOU HAVE NO REMEDIES FOR NEGLIGENCE, STRICT
          LIABILITY, BREACH OF WARRANTY OR BREACH OF CONTRACT EXCEPT THOSE
          PROVIDED IN PARAGRAPH F3. YOU AGREE THAT THE FOUNDATION, THE TRADEMARK
          OWNER, AND ANY DISTRIBUTOR UNDER THIS AGREEMENT WILL NOT BE LIABLE TO
          YOU FOR ACTUAL, DIRECT, INDIRECT, CONSEQUENTIAL, PUNITIVE OR
          INCIDENTAL DAMAGES EVEN IF YOU GIVE NOTICE OF THE POSSIBILITY OF SUCH
          DAMAGE.
        </p>
        <p>
          1.F.3. LIMITED RIGHT OF REPLACEMENT OR REFUND - If you discover a
          defect in this electronic work within 90 days of receiving it, you can
          receive a refund of the money (if any) you paid for it by sending a
          written explanation to the person you received the work from. If you
          received the work on a physical medium, you must return the medium
          with your written explanation. The person or entity that provided you
          with the defective work may elect to provide a replacement copy in
          lieu of a refund. If you received the work electronically, the person
          or entity providing it to you may choose to give you a second
          opportunity to receive the work electronically in lieu of a refund. If
          the second copy is also defective, you may demand a refund in writing
          without further opportunities to fix the problem.
        </p>
        <p>
          1.F.4. Except for the limited right of replacement or refund set forth
          in paragraph 1.F.3, this work is provided to you 'AS-IS' WITH NO OTHER
          WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
          TO WARRANTIES OF MERCHANTIBILITY OR FITNESS FOR ANY PURPOSE.
        </p>
        <p>
          1.F.5. Some states do not allow disclaimers of certain implied
          warranties or the exclusion or limitation of certain types of damages.
          If any disclaimer or limitation set forth in this agreement violates
          the law of the state applicable to this agreement, the agreement shall
          be interpreted to make the maximum disclaimer or limitation permitted
          by the applicable state law. The invalidity or unenforceability of any
          provision of this agreement shall not void the remaining provisions.
        </p>
        <p>
          1.F.6. INDEMNITY - You agree to indemnify and hold the Foundation, the
          trademark owner, any agent or employee of the Foundation, anyone
          providing copies of Project Gutenberg-tm electronic works in
          accordance with this agreement, and any volunteers associated with the
          production, promotion and distribution of Project Gutenberg-tm
          electronic works, harmless from all liability, costs and expenses,
          including legal fees, that arise directly or indirectly from any of
          the following which you do or cause to occur: (a) distribution of this
          or any Project Gutenberg-tm work, (b) alteration, modification, or
          additions or deletions to any Project Gutenberg-tm work, and (c) any
          Defect you cause.
        </p>
        <p>Section 2. Information about the Mission of Project Gutenberg-tm</p>
        <p>
          Project Gutenberg-tm is synonymous with the free distribution of
          electronic works in formats readable by the widest variety of
          computers including obsolete, old, middle-aged and new computers. It
          exists because of the efforts of hundreds of volunteers and donations
          from people in all walks of life.
        </p>
        <p>
          Volunteers and financial support to provide volunteers with the
          assistance they need, is critical to reaching Project Gutenberg-tm's
          goals and ensuring that the Project Gutenberg-tm collection will
          remain freely available for generations to come. In 2001, the Project
          Gutenberg Literary Archive Foundation was created to provide a secure
          and permanent future for Project Gutenberg-tm and future generations.
          To learn more about the Project Gutenberg Literary Archive Foundation
          and how your efforts and donations can help, see Sections 3 and 4 and
          the Foundation web page at
          <a href="http://pglaf.org"> http://pglaf.org</a>.
        </p>
        <p>
          Section 3. Information about the Project Gutenberg Literary Archive
          Foundation
        </p>
        <p>
          The Project Gutenberg Literary Archive Foundation is a non profit
          501(c)(3) educational corporation organized under the laws of the
          state of Mississippi and granted tax exempt status by the Internal
          Revenue Service. The Foundation's EIN or federal tax identification
          number is 64-6221541. Its 501(c)(3) letter is posted at
          <a href="http://pglaf.org/fundraising">
            {" "}
            http://pglaf.org/fundraising
          </a>
          . Contributions to the Project Gutenberg Literary Archive Foundation
          are tax deductible to the full extent permitted by U.S. federal laws
          and your state's laws.
        </p>
        <p>
          The Foundation's principal office is located at 4557 Melan Dr. S.
          Fairbanks, AK, 99712., but its volunteers and employees are scattered
          throughout numerous locations. Its business office is located at 809
          North 1500 West, Salt Lake City, UT 84116, (801) 596-1887, email
          business@pglaf.org. Email contact links and up to date contact
          information can be found at the Foundation's web site and official
          page at <a href="http://pglaf.org"> http://pglaf.org</a>
        </p>
        <p>
          For additional contact information: Dr. Gregory B. Newby Chief
          Executive and Director gbnewby@pglaf.org
        </p>
        <p>
          Section 4. Information about Donations to the Project Gutenberg
          Literary Archive Foundation
        </p>
        <p>
          Project Gutenberg-tm depends upon and cannot survive without wide
          spread public support and donations to carry out its mission of
          increasing the number of public domain and licensed works that can be
          freely distributed in machine readable form accessible by the widest
          array of equipment including outdated equipment. Many small donations
          ($1 to $5,000) are particularly important to maintaining tax exempt
          status with the IRS.
        </p>
        <p>
          The Foundation is committed to complying with the laws regulating
          charities and charitable donations in all 50 states of the United
          States. Compliance requirements are not uniform and it takes a
          considerable effort, much paperwork and many fees to meet and keep up
          with these requirements. We do not solicit donations in locations
          where we have not received written confirmation of compliance. To SEND
          DONATIONS or determine the status of compliance for any particular
          state visit
          <a href="http://pglaf.org"> http://pglaf.org</a>
        </p>
        <p>
          While we cannot and do not solicit contributions from states where we
          have not met the solicitation requirements, we know of no prohibition
          against accepting unsolicited donations from donors in such states who
          approach us with offers to donate.
        </p>
        <p>
          International donations are gratefully accepted, but we cannot make
          any statements concerning tax treatment of donations received from
          outside the United States. U.S. laws alone swamp our small staff.
        </p>
        <p>
          Please check the Project Gutenberg Web pages for current donation
          methods and addresses. Donations are accepted in a number of other
          ways including including checks, online payments and credit card
          donations. To donate, please visit:
          <a href="http://pglaf.org/donate"> http://pglaf.org/donate</a>
        </p>
        <p>
          Section 5. General Information About Project Gutenberg-tm electronic
          works.
        </p>
        <p>
          Professor Michael S. Hart is the originator of the Project
          Gutenberg-tm concept of a library of electronic works that could be
          freely shared with anyone. For thirty years, he produced and
          distributed Project Gutenberg-tm eBooks with only a loose network of
          volunteer support.
        </p>
        <p>
          Project Gutenberg-tm eBooks are often created from several printed
          editions, all of which are confirmed as Public Domain in the U.S.
          unless a copyright notice is included. Thus, we do not necessarily
          keep eBooks in compliance with any particular paper edition.
        </p>
        <p>
          Most people start at our Web site which has the main PG search
          facility:
          <a href="http://www.gutenberg.org/"> http://www.gutenberg.org</a>
        </p>
        <p>
          This Web site includes information about Project Gutenberg-tm,
          including how to make donations to the Project Gutenberg Literary
          Archive Foundation, how to help produce our new eBooks, and how to
          subscribe to our email newsletter to hear about new eBooks.
        </p>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
