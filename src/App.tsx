import React from "react";

import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<meta name="description" content="" />
					<meta name="author" content="" />
					<title>Huffman &amp; Associates</title>
					{/* Favicon*/}
					<link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
					{/* Bootstrap icons*/}
					<link
						href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
						rel="stylesheet"
						type="text/css"
					/>
					{/* Google fonts*/}
					<link
						href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic"
						rel="stylesheet"
						type="text/css"
					/>
					{/* Core theme CSS (includes Bootstrap)*/}
					<link href="css/styles.css" rel="stylesheet" />
					{/* Navigation*/}
					<nav className="navbar navbar-light bg-light static-top">
						<div className="container">
							<a className="navbar-brand">Land Surveying</a>
							<a className="btn btn-primary" href="tel:816-322-4544">
								Call
							</a>
						</div>
					</nav>
					{/* Masthead*/}
					<header className="masthead">
						<div className="container position-relative">
							<div className="row justify-content-center">
								<div className="col-xl-6">
									<div className="text-center text-white">
										{/* Page heading*/}
										<h1 className="mb-5">Huffman &amp; Associates</h1>
										<h1 className="mb-5">Land Surveyors</h1>
										<div className="row">
											<div className="col">
												<h1 className="mb-5">Belton Missouri</h1>
												<h1 className="mb-5">816-322-4544</h1>
											</div>
										</div>
									</div>
									{/* Submit success message*/}
									{/**/}
									{/* This is what your users will see when the form*/}
									{/* has successfully submitted*/}
									<div className="d-none" id="submitSuccessMessage">
										<div className="text-center mb-3">
											<div className="fw-bolder">
												Form submission successful!
											</div>
											<p>To activate this form, sign up at</p>
											<a
												className="text-white"
												href="https://startbootstrap.com/solution/contact-forms"
											>
												https://startbootstrap.com/solution/contact-forms
											</a>
										</div>
									</div>
									{/* Submit error message*/}
									{/**/}
									{/* This is what your users will see when there is*/}
									{/* an error submitting the form*/}
									<div className="d-none" id="submitErrorMessage">
										<div className="text-center text-danger mb-3">
											Error sending message!
										</div>
									</div>
								</div>
							</div>
						</div>
					</header>
					{/* Icons Grid*/}
					<section className="features-icons bg-light text-center">
						<div className="container">
							<div className="row">
								<div className="col-lg-4">
									<div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
										<div className="features-icons-icon d-flex">
											<i className="bi bi-pin-map m-auto text-primary" />
										</div>
										<h3>Property Lines</h3>
										<p className="lead mb-0">
											Location of property corners and property line staking for
											fence lines and other building requirements.
										</p>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
										<div className="features-icons-icon d-flex">
											<i className="bi-layers m-auto text-primary" />
										</div>
										<h3>Plot Plans and Drafting</h3>
										<p className="lead mb-0">
											Topography and plot plan drafting for commercial or
											residential construction. Lot division and deed rewrites.
										</p>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="features-icons-item mx-auto mb-0 mb-lg-3">
										<div className="features-icons-icon d-flex">
											<i className="bi bi-building m-auto text-primary" />
										</div>
										<h3>Construction</h3>
										<p className="lead mb-0">Your words here</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* Testimonials*/}
					{/* Call to Action*/}
					<section
						className="call-to-action text-white text-center"
						id="signup"
					>
						<div className="container position-relative">
							<div className="row justify-content-center">
								<div className="col-xl-6">
									<h2 className="mb-4">Ready to get started? </h2>
									<a className="btn btn-primary" href="tel:816-322-4544">
										Call now!
									</a>
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									{/* Footer*/}
									<footer className="footer bg-light">
										<div className="container">
											<div className="row">
												<div className="col-lg-6 h-100 text-center text-lg-start my-auto">
													<p className="text-muted small mb-4 mb-lg-0">
														© Matt Huffman 2022. All Rights Reserved.
													</p>
												</div>
											</div>
										</div>
									</footer>
									{/* Bootstrap core JS*/}
									{/* Core theme JS*/}
									{/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
									{/* * *                               SB Forms JS                               * **/}
									{/* * * Activate your form at https://startbootstrap.com/solution/contact-forms * **/}
									{/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
								</div>
							</div>
						</div>
					</section>
				</>
			</header>
		</div>
	);
}

export default App;
