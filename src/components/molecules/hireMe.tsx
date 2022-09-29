import { boolean, z } from 'zod';
import { newJobSchema } from '../../schemas/job.schema';
import { FieldError, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { deepExtractMessage } from '../../utils/utility';
import { trpc } from '../../utils/trpc';
import { useState } from 'react';
import LoadingIcons from 'react-loading-icons';

type NewJobType = z.infer<typeof newJobSchema>;

function TwoInRow({ first, second }: { first: JSX.Element; second: JSX.Element }) {
	return (
		<div className="mt-4 mb-4 flex flex-col md:flex-row">
			<div className="mr-3 w-full md:w-1/2 lg:mr-5">{first}</div>
			<div className="mt-6 w-full md:mt-0 md:ml-3 md:w-1/2 lg:ml-5">{second}</div>
		</div>
	);
}

function Label({ id, text }: { id: string; text: string }) {
	return (
		<label className="mb-2 block text-sm font-bold text-secondary" htmlFor={id}>
			{text}
		</label>
	);
}

function StyledLabeledTextInput({
	id,
	text,
	additionalProps,
	placeHolder,
	disabled,
	error,
}: {
	id: string;
	text: string;
	additionalProps: any;
	placeHolder?: string;
	disabled?: boolean;
	error: FieldError | undefined;
}) {
	return (
		<>
			<Label id={id} text={text} />
			<input
				className={`${
					error ? 'border-african-violet bg-brandy' : 'border-grey-200'
				} w-full rounded px-4 py-3 font-body text-black`}
				placeholder={placeHolder || text}
				id={id}
				{...additionalProps}
				disabled={disabled}
				type="text"
			/>
		</>
	);
}

export function HireMe() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<NewJobType>({
		resolver: zodResolver(newJobSchema),
	});
	const [submitState, setSubmitState] = useState<'waiting' | 'success' | 'failure'>('waiting');
	const mutation = trpc.useMutation(['job.createJobOpportunity']);
	const onSubmit = async (data: NewJobType) => {
		await mutation.mutateAsync(data);
		if (!mutation.error) {
			reset();
			setSubmitState('success');
		} else {
			setSubmitState('failure');
		}
		setTimeout(() => setSubmitState('waiting'), 7000);
	};

	return (
		<>
			<div className="container  py-16 md:py-20" id="contact">
				<h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
					Hire Me
				</h2>
				<h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
					Looking to hire me? Fill out this form
				</h4>
				<div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
					<p className="font-body text-grey-10">
						I am very happy in my current role, and have no plans to leave it currently. However, I get a constant steam
						of messages from recruiters, and I want to a way to save the job opportunies should my future situation
						change. Fill out the below form, and I will keep you in mind the next time I begin looking for a new
						opportunity. I may forward this information to other contacts if believe they are a good fit for the given
						job description.
					</p>
				</div>
				<form className="mx-auto w-full pt-10 sm:w-3/4">
					<TwoInRow
						first={
							<StyledLabeledTextInput
								id="title"
								text="Position Title"
								additionalProps={register('positionTitle')}
								disabled={isSubmitting}
								error={errors.positionTitle}
							/>
						}
						second={
							<StyledLabeledTextInput
								id="email"
								text="Followup Email Address"
								placeHolder="recruiter@email.com"
								additionalProps={register('email')}
								disabled={isSubmitting}
								error={errors.email}
							/>
						}
					/>
					<div className="mt-5 mb-5">
						<Label id="jobDescription" text="Job Description" />
						<textarea
							className={`border-grey-200 w-full rounded px-4 py-3 font-body text-black`}
							placeholder="Job Description"
							{...register('jobDescription')}
							cols={30}
							rows={3}
							id="jobDescription"
							disabled={isSubmitting}
						></textarea>
					</div>

					<div className="mt-5 mb-5">
						<Label id="salaryRange" text="Salary Range" />
						<div id="salaryRange">
							<TwoInRow
								first={
									<>
										<Label id="salaryMin" text="Min" />
										<div className="relative mt-1">
											<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
												<span className="text-gray-500 sm:text-sm">$</span>
											</div>
											<input
												type="number"
												id="salaryMin"
												{...register('salary.rangeMin', { valueAsNumber: true })}
												className={`${
													errors.salary?.rangeMin ? 'border-african-violet bg-brandy' : 'border-grey-200'
												} focus:border-indigo-500 focus:ring-indigo-500 block w-full  pl-7 pr-12 sm:text-sm`}
												placeholder="70,000.00"
												disabled={isSubmitting}
											/>
										</div>
									</>
								}
								second={
									<>
										<Label id="salaryMax" text="Max" />
										<div className="relative mt-1">
											<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
												<span className="text-gray-500 sm:text-sm">$</span>
											</div>
											<input
												type="number"
												{...register('salary.rangeMax', { valueAsNumber: true })}
												id="salaryMax"
												className={`${
													errors.salary?.rangeMax ? 'border-african-violet bg-brandy' : 'border-grey-200'
												} focus:border-indigo-500 focus:ring-indigo-500 block w-full  pl-7 pr-12 sm:text-sm`}
												placeholder="700,000.00"
												disabled={isSubmitting}
											/>
										</div>
									</>
								}
							/>
						</div>
					</div>
					<div className="mt-5 mb-5">
						<Label id="bonusPotential" text="Bonuses + Other Compensation" />
						<div className="relative mt-1">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<span className="text-gray-500 sm:text-sm">$</span>
							</div>
							<input
								type="number"
								{...register('salary.bonusPotential', { valueAsNumber: true })}
								id="bonusPotential"
								className={`${
									errors.salary?.bonusPotential ? 'border-african-violet bg-brandy' : 'border-grey-200'
								} focus:border-indigo-500 focus:ring-indigo-500 block w-full  pl-7 pr-12 sm:text-sm`}
								placeholder="0.00"
								disabled={isSubmitting}
							/>
						</div>
					</div>
					<TwoInRow
						first={
							<StyledLabeledTextInput
								id="country"
								text="Country"
								additionalProps={register('location.country')}
								disabled={isSubmitting}
								error={errors.location?.country}
							/>
						}
						second={
							<StyledLabeledTextInput
								id="city"
								text="City"
								additionalProps={register('location.city')}
								disabled={isSubmitting}
								error={errors.location?.city}
							/>
						}
					/>

					<>
						<Label id="workType" text="Location Type" />
						<select
							className="border-grey-200 w-full rounded px-4 py-3 font-body text-black"
							{...register('workType')}
							id="workType"
							disabled={isSubmitting}
						>
							<option value="REMOTE">Remote Only</option>
							<option value="HYBRID_LEAN_REMOTE">Hybrid, Lean Remote</option>
							<option value="HYBRID_HALF_AND_HALF">Hybrid, Even Split</option>
							<option value="HYBRID_LEAN_INOFFICE">Hybrid, Lean In-Office</option>
							<option value="INOFFICE">In-Office Only</option>
						</select>
					</>
					{isSubmitting ? (
						<LoadingIcons.TailSpin stroke="#06bcee" fill="#06bcee" fillOpacity={1} strokeOpacity={1} strokeWidth={2} />
					) : (
						<button
							onClick={handleSubmit(onSubmit)}
							className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-secondary"
							disabled={isSubmitting}
						>
							Submit
							<i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
						</button>
					)}

					<div className="mt-5">
						{submitState === 'success' && (
							<div className="mb-4 rounded-lg bg-green-ryb p-4 text-sm text-black" role="alert">
								<span className="font-medium text-ao-english">Success!</span> Your information has been submitted
								successfully.
							</div>
						)}
						{submitState === 'failure' && (
							<div className=" mb-4 rounded-lg bg-caput-mortuum p-4 text-sm text-lila" role="alert">
								<span className="font-medium text-brandy">Oops!</span> Something went wrong. Feel free to try again or
								email me @ itai.rivkin.fish@gmail.com
							</div>
						)}
					</div>
				</form>
			</div>
		</>
	);
}
