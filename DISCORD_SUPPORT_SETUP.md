# Corrupt State RP — Discord support bridge

The support site is deployed separately from the existing site API:
- Support Worker: https://corrupt-state-support-api.irdreed95.workers.dev
- Interaction endpoint: https://corrupt-state-support-api.irdreed95.workers.dev/api/discord/interactions

## Discord application setup (required for staff replies)
1. In Discord Developer Portal, create an application named Corrupt State Support.
2. On General Information, copy the **Application ID** and **Public Key**.
3. On Bot, create a bot and copy its token. Keep it private.
4. Invite the bot to the support server with permissions to use application commands. The bot does not need Administrator.
5. In Cloudflare Worker settings for `corrupt-state-support-api`, add Secrets:
   - `DISCORD_WEBHOOK_URL`: a newly generated webhook URL (rotate the previously exposed webhook).
   - `DISCORD_PUBLIC_KEY`: the app's Public Key (hex string).
6. Set the Discord app's Interactions Endpoint URL to the endpoint above. Discord will validate it using the Public Key.
7. In GitHub repository Settings → Secrets and variables → Actions, add:
   - `DISCORD_APPLICATION_ID`
   - `DISCORD_BOT_TOKEN`
8. Run the workflow **Register Corrupt State support command** from Actions → Register Corrupt State support command → Run workflow.

## Staff workflow
- New ticket notifications are sent to the configured Discord webhook.
- Staff replies with `/cs-reply ticket_id:CS-XXXXXXXX message:Your reply`.
- The reply is stored in D1 and appears in the player's same support chat within a few seconds.
- Do not ask players for passwords, one-time codes, or full payment card details.

The webhook is for outbound notifications only. The signed Discord Interactions endpoint is used for inbound staff replies; a webhook by itself cannot receive replies.
