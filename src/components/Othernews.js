import Image from 'next/image';
import React from 'react';
const Othernews = () => {
    return (
        <>
            <div className='col-lg-4'>
                <h2 className='mb-4 text-primary font-weight-600'>Latest news</h2>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='border-bottom pb-4 pt-4'>
                            <div className='row'>
                                <div className='col-sm-8'>
                                    <h5 className='font-weight-600 mb-1'>Ways to stay social online while in self..</h5>
                                    <p className='fs-13 text-muted mb-0'>
                                        <span className='mr-2'>Photo </span>10 Minutes ago
                                    </p>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='rotate-img img-fluid'>
                                        <Image src='/assets/images/travel/Travel_1.png' width={80} height={60} alt='banner' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='border-bottom pb-4 pt-4'>
                            <div className='row'>
                                <div className='col-sm-8'>
                                    <h5 className='font-weight-600 mb-1'>Premier League players join charity..</h5>
                                    <p className='fs-13 text-muted mb-0'>
                                        <span className='mr-2'>Photo </span>10 Minutes ago
                                    </p>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='rotate-img img-fluid'>
                                        <Image src='/assets/images/travel/Travel_2.png' width={80} height={60} alt='banner' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='pt-4'>
                            <div className='row'>
                                <div className='col-sm-8'>
                                    <h5 className='font-weight-600 mb-1'>UK Athletics board changed stance on..</h5>
                                    <p className='fs-13 text-muted mb-0'>
                                        <span className='mr-2'>Photo </span>10 Minutes ago
                                    </p>
                                </div>
                                <div className='col-sm-4'>
                                    <div className='rotate-img img-fluid'>
                                        <Image src='/assets/images/travel/Travel_3.png' width={80} height={60} alt='banner' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='trending'>
                    <h2 className='mb-4 text-primary font-weight-600'>Trending</h2>
                    <div className='mb-4'>
                        <div className='rotate-img img-fluid'>
                            <Image src='/assets/images/travel/Travel_4.png' width={311} height={117} alt='banner' />
                        </div>
                        <h3 className='mt-3 font-weight-600'>Virus Kills Member Of Advising Iran’s Supreme</h3>
                        <p className='fs-13 text-muted mb-0'>
                            <span className='mr-2'>Photo </span>10 Minutes ago
                        </p>
                    </div>
                    <div className='mb-4'>
                        <div className='rotate-img img-fluid'>
                            <Image src='/assets/images/travel/Travel_5.png' w width={311} height={117} alt='banner' />
                        </div>
                        <h3 className='mt-3 font-weight-600'>Virus Kills Member Of Advising Iran’s Supreme</h3>
                        <p className='fs-13 text-muted mb-0'>
                            <span className='mr-2'>Photo </span>10 Minutes ago
                        </p>
                    </div>
                    <div className='mb-4'>
                        <div className='rotate-img img-fluid'>
                            <Image src='/assets/images/travel/Travel_6.png' width={311} height={117} alt='banner' />
                        </div>
                        <h3 className='mt-3 font-weight-600'>Virus Kills Member Of Advising Iran’s Supreme</h3>
                        <p className='fs-13 text-muted mb-0'>
                            <span className='mr-2'>Photo </span>10 Minutes ago
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Othernews;