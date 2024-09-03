const TDEEForm = () => {
    return (
        <>
            <form id="form_tdee">
                <fieldset>
                    <legend>Gender</legend>
                    <input type="radio" id="gender_m" name="gender" value="male" defaultChecked={true} />
                    <label htmlFor="gender_m">Male</label>
                    &nbsp;
                    <input type="radio" id="gender_f" name="gender" value="female"></input>
                    <label htmlFor="gender_f">Female</label>
                </fieldset><br/>

                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" min="0" max="122" required /><br/>

                <label htmlFor="weight">Weight</label>
                <input type="number" id="weight" min="0" max="1400" placeholder="lb" required /><br/>

                <label htmlFor="height">Height</label>
                <select name="height" id="height" defaultValue={"height_5_10"}>
                    <option value="height_4_7">4′ 7″</option>
                    <option value="height_4_8">4′ 8″</option>
                    <option value="height_4_9">4′ 9″</option>
                    <option value="height_4_10">4′ 10″</option>
                    <option value="height_4_11">4′ 11″</option>
                    <option value="height_5_0">5′</option>
                    <option value="height_5_1">5′ 1″</option>
                    <option value="height_5_2">5′ 2″</option>
                    <option value="height_5_3">5′ 3″</option>
                    <option value="height_5_4">5′ 4″</option>
                    <option value="height_5_5">5′ 5″</option>
                    <option value="height_5_6">5′ 6″</option>
                    <option value="height_5_7">5′ 7″</option>
                    <option value="height_5_8">5′ 8″</option>
                    <option value="height_5_9">5′ 9″</option>
                    <option value="height_5_10">5′ 10″</option>
                    <option value="height_5_11">5′ 11″</option>
                    <option value="height_6_0">6′</option>
                    <option value="height_6_1">6′ 1″</option>
                    <option value="height_6_2">6′ 2″</option>
                    <option value="height_6_3">6′ 3″</option>
                    <option value="height_6_4">6′ 4″</option>
                    <option value="height_6_5">6′ 5″</option>
                    <option value="height_6_6">6′ 6″</option>
                    <option value="height_6_7">6′ 7″</option>
                    <option value="height_6_8">6′ 8″</option>
                    <option value="height_6_9">6′ 9″</option>
                    <option value="height_6_10">6′ 10″</option>
                    <option value="height_6_11">6′ 11″</option>
                    <option value="height_7_0">7′</option>
                </select><br/>

                <label htmlFor="activity">Activity</label>
                <select name="activity" id="activity">
                    <option value="activity_sedentary">Sedentary (office job)</option>
                    <option value="activity_light">Light Exercise (1-2 days/week)</option>
                    <option value="activity_moderate">Moderate Exercise (3-5 days/week)</option>
                    <option value="activity_heavy">Heavy Exercise (6-7 days/week)</option>
                    <option value="activity_athlete">Athlete (2x per day)</option>
                </select><br/><br/>

                <input type="submit" value="Calculate" disabled />
            </form>
            <p>Estimated maintenance calories: <span id="tdee_output"></span></p>
        </>
    );
};

export default TDEEForm;