import NPCActor from "../models/ActorModel.js";


export let getEncounters;
export let Encounters;
export let ActiveEncounters;
export let getActiveEncounters;



export async function getActorFromID(actorID) {
   return await game.actors.get(actorID);
}


 export async function getNPCActorFromEncounters() {
    const encounters = await game.combats;
    const activeEncounter = encounters.find((encounter) => encounter.active === true);

    if (!activeEncounter) {
       console.log("No active encounter found.");
       return [];
    }

    const npcCombatants = activeEncounter.combatants.filter(
     (combatant) => combatant.actor.data.type === "npc"
    );

    const npcActors = [];

    for (const npcCombatant of npcCombatants)
    {
       const foundryNPC = npcCombatant.actor;
       const npcActor = createNPCActorFactory(foundryNPC);
       npcActors.push(npcActor);
    }

    return npcActors;
 }


function createNPCActorFactory(foundryNPC) {
   return new NPCActor(foundryNPC);
}

