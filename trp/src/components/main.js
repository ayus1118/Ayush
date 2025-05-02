import '../main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Router } from "react-router-dom"

function Main() {
  return (
    <div class="main">
        <div class="upper">
            <div class="container">
                <div class="row d-flex flex-column-reverse flex-lg-row">
                    <div class="col-12 col-lg-8">
                        <div class="d-flex align-items-center flex-column flex-md-row">
                            <img src={"./images/cover.png"} alt="" class="book-img me-5"/>
                            <div class="cover-book d-flex flex-column">
                                <h1 class="fw-bold text-uppercase mb-4 text-white">Real English</h1>
                                <span class="fw-bold text-uppercase mb-2">NEP-NCF Edition 2025</span>
                                <span class="fw-bold mb-2">Teacher’s Resources</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 d-flex justify-content-end">
                                    <span class="class-number d-flex justify-content-center text-white align-items-center fw-bold d-block rounded-circle">2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <ul class="all-activites p-0">
                            <Router>
                                <Routes>
                                        <li class="iconlist">
                                            <Link to="" class="d-flex flex-column align-items-center">
                                                <span class="activity-imgage-outer d-flex align-items-center justify-content-center mb-4">
                                                <img src={"./images/Animated_Concepts.png"} alt="" class=""/>
                                                </span>
                                                <span class="activite-title">Animated Lessons</span>
                                            </Link>
                                        </li>
                                        <li class="iconlist">
                                            <Link to="" class="d-flex flex-column align-items-center">
                                                <span class="activity-imgage-outer d-flex align-items-center justify-content-center mb-4">
                                                    <img src={"./images/E-book.png"} alt="" class=""/>
                                                </span>
                                                <span class="activite-title">E-book</span>
                                            </Link>
                                        </li>
                                        <li class="iconlist">
                                            <Link to="" class="d-flex flex-column align-items-center">
                                                <span class="activity-imgage-outer d-flex align-items-center justify-content-center mb-4">
                                                    <img src={"./images/Lesson_Plans.png"} alt="" class=""/>
                                                </span>
                                                <span class="activite-title">Lesson Plans</span>
                                            </Link>
                                        </li>
                                        <li class="iconlist">
                                            <Link to="" class="d-flex flex-column align-items-center">
                                                <span class="activity-imgage-outer d-flex align-items-center justify-content-center mb-4">
                                                    <img src={"./images/Detailed_Answer_Keys.png"} alt="" class=""/>
                                                </span>
                                                <span class="activite-title">Answer Key (Coursebook)</span>
                                            </Link>
                                        </li>
                                        <li class="iconlist">
                                            <Link to="" class="d-flex flex-column align-items-center">
                                                <span class="activity-imgage-outer d-flex align-items-center justify-content-center mb-4">
                                                    <img src={"./images/nep.png"} alt="" class=""/>
                                                </span>
                                                <span class="activite-title">NEP Resources (Coursebook)</span>
                                            </Link>
                                        </li>
                                        <li class="iconlist">
                                            <Link to="" class="d-flex flex-column align-items-center">
                                                <span class="activity-imgage-outer d-flex align-items-center justify-content-center mb-4">
                                                    <img src={"./images/audio.png"} alt="" class=""/>
                                                </span>
                                                <span class="activite-title">Audio (Interact)</span>
                                            </Link>
                                        </li>
                                        <li class="iconlist">
                                            <Link to="" class="d-flex flex-column align-items-center">
                                                <span class="activity-imgage-outer d-flex align-items-center justify-content-center mb-4">
                                                    <img src={"./images/audio_transcripts.png"} alt="" class=""/>
                                                </span>
                                                <span class="activite-title">Audio Transcripts</span>
                                            </Link>
                                        </li>
                                        <li class="iconlist">
                                            <Link to="" class="d-flex flex-column align-items-center">
                                                <span class="activity-imgage-outer d-flex align-items-center justify-content-center mb-4">
                                                    <img src={"./images/Interactive_Exercises.png"} alt="" class=""/>
                                                </span>
                                                <span class="activite-title">Interactive Exercises</span>
                                            </Link>
                                        </li>
                                        <li class="iconlist">
                                            <Link to="" class="d-flex flex-column align-items-center">
                                                <span class="activity-imgage-outer d-flex align-items-center justify-content-center mb-4">
                                                    <img src={"./images/Worksheet_with_Answers.png"} alt="" class=""/>
                                                </span>
                                                <span class="activite-title">Worksheets</span>
                                            </Link>
                                        </li>
                                        <li class="iconlist">
                                            <Link to="" class="d-flex flex-column align-items-center">
                                                <span class="activity-imgage-outer d-flex align-items-center justify-content-center mb-4">
                                                    <img src={"./images/model.png"} alt="" class=""/>
                                                </span>
                                                <span class="activite-title">Model Tests</span>
                                            </Link>
                                        </li>
                                        <li class="iconlist">
                                            <Link to="" class="d-flex flex-column align-items-center">
                                                <span class="activity-imgage-outer d-flex align-items-center justify-content-center mb-4">
                                                    <img src={"./images/Test_Generator.png"} alt="" class=""/>
                                                </span>
                                                <span class="activite-title">Test Generator</span>
                                            </Link>
                                        </li>
                                        <li class="iconlist">
                                            <Link to="" class="d-flex flex-column align-items-center">
                                                <span class="activity-imgage-outer d-flex align-items-center justify-content-center mb-4">
                                                    <img src={"./images/E-book.png"} alt="" class=""/>
                                                </span>
                                                <span class="activite-title">NEP Resources (Activity E-book)</span>
                                            </Link>
                                        </li>
                                        <li class="iconlist">
                                            <Link to="" class="d-flex flex-column align-items-center">
                                                <span class="activity-imgage-outer d-flex align-items-center justify-content-center mb-4">
                                                    <img src={"./images/Detailed_Answer_Keys.png"} alt="" class=""/>
                                                </span>
                                                <span class="activite-title">Answer Key (Workbook)</span>
                                            </Link>
                                        </li>
                                        <li class="iconlist">
                                            <Link to="" class="d-flex flex-column align-items-center">
                                                <span class="activity-imgage-outer d-flex align-items-center justify-content-center mb-4">
                                                    <img src={"./images/Test_Generator.png"} alt="" class=""/>
                                                </span>
                                                <span class="activite-title">Audio Transcripts (Workbook)</span>
                                            </Link>
                                        </li>
                                        <li class="iconlist">
                                            <Link to="" class="d-flex flex-column align-items-center">
                                                <span class="activity-imgage-outer d-flex align-items-center justify-content-center mb-4">
                                                    <img src={"./images/nep.png"} alt="" class=""/>
                                                </span>
                                                <span class="activite-title">NEP Resources (Workbook)</span>
                                            </Link>
                                        </li>
                                </Routes>
                            </Router>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     </div>
  );
}

export default Main;
