import * as React from 'react';
// import * as logo from '../../../'
import styled from '@emotion/styled';
import tw from "tailwind.macro";

const LastTopic = styled.div`
    ${tw`bg-red px-2 py-2 flex flex-start`}
`
interface ICardProps {
    title: String,
    description: String,
    topics: String,
    lastTopic: String,
    Activity: String,
    User: String,
    img: string
}

const Card: React.FunctionComponent<ICardProps> = ({ img, title, description, topics, lastTopic, Activity, User }) => {
    return (

        <div className="border-gray-400 border bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex min-h-full h-48 ">
            <div className="border-l-4 border-red-400 .h-screen pr-2"></div>
            <div className="img">
                <img className="h-24 w-24 rounded-full mx-auto" src={img} alt="Randy Robertson" />
            </div>
            <div className="mb-8 flex-1 px-3">
                <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base text-justify">{description}</p>
            </div>
            <div className="border-l .h-screen"></div>
            <div className="flex-col flex-1 flex px-4">
                <div className="flex flex-row">
                    <div className="flex flex-col px-2">
                        <div className="color-gray">
                            topic
                        </div>
                        <span>{topics}</span>
                    </div>
                    <div className="flex flex-col px-2">
                        <div className="color-gray">
                            User
                        </div>
                        <span>{User}</span>
                    </div>
                    <div className="flex flex-col px-2">
                        <div className="color-gray">
                            Activity
                    </div>
                        <span>{Activity}</span>
                    </div>

                </div>
                <div className="border-b .w-screen py-2"></div>
                <span className="text-gray-600 px-2 py-2">Last Topic</span>
                <LastTopic>
                    <img className="h-10 w-10 rounded-full " src={img} alt="Randy Robertson" />
                    <span className="flex-1">{lastTopic}</span>
                </LastTopic>
            </div>
        </div>

    );
};

export default Card;
